import { NextResponse } from 'next/server';
import logger from '../../../lib/logger';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, renewalDate } = data || {};

    if (!email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!sheetsWebhook) {
      return NextResponse.json({ error: 'Sheets webhook not configured' }, { status: 500 });
    }

    try {
      // include optional secret if provided in server env
      const payload: Record<string, unknown> = {
        email,
        renewalDate: renewalDate || '',
        createdAt: new Date().toISOString(),
        // trim to avoid accidental trailing spaces
        sheetName: 'Renewal reminder'.trim()
      };
      if (process.env.SHEETS_SECRET) payload['secret'] = process.env.SHEETS_SECRET;

      // DEBUG: log payload and masked webhook URL to help trace where rows are written
      try {
        const masked = String(sheetsWebhook).replace(/(.{6}).*(.{6})/, '$1...$2');
        logger.debug('[stay-in-touch] sending to webhook:', masked, 'payload:', JSON.stringify(payload));
      } catch {
        logger.debug('[stay-in-touch] debug logging failed');
      }

      const resp = await fetch(sheetsWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!resp.ok) {
  const bodyText = await resp.text().catch(() => 'no body');
  logger.error('Sheets webhook error', resp.status, bodyText);
        return NextResponse.json({ error: `Sheets webhook returned ${resp.status}`, body: bodyText }, { status: 502 });
      }

      // check returned JSON body for ok:true if Apps Script returns JSON
  // no longer capture webhook sheet name; we do not expose sheet names to clients
      try {
        const text = await resp.text().catch(() => '');
  // DEBUG: log webhook response body (gated)
  logger.debug('[stay-in-touch] webhook response status:', resp.status, 'body:', text);
        // try parse
        let parsed: Record<string, unknown> = {};
        try { parsed = text ? JSON.parse(text) : {}; } catch { parsed = {}; }
        const parsedOk = typeof parsed['ok'] === 'boolean' ? parsed['ok'] === true : undefined;
        if (parsedOk === false) {
          const parsedErr = typeof parsed['error'] === 'string' ? parsed['error'] : undefined;
          return NextResponse.json({ error: parsedErr || 'Sheets reported failure', body: parsed }, { status: 502 });
        }
  // don't capture sheetName — we intentionally hide sheet names from users
      } catch (dbgErr) {
        logger.debug('[stay-in-touch] error reading webhook response', dbgErr);
      }

  return NextResponse.json({ ok: true, sheetSent: true });
    } catch (err: unknown) {
      logger.error('Error sending to Sheets webhook', err);
      const message = err instanceof Error ? err.message : String(err);
      return NextResponse.json({ error: message || 'Failed to send to sheets webhook' }, { status: 502 });
    }
  } catch (err: unknown) {
    logger.error('StayInTouch API error', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message || 'Server error' }, { status: 500 });
  }
}
