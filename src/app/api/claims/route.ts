import { NextResponse } from 'next/server';
import logger from '../../../lib/logger';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      claimReference,
      name,
      company,
      telephone,
      email,
      policyNumber,
      dateOfIncident,
      details
    } = data || {};

    if (!name || !telephone || !email || !details || !claimReference) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!sheetsWebhook) {
      return NextResponse.json({ error: 'Sheets webhook not configured' }, { status: 500 });
    }

    const payload: Record<string, unknown> = {
      claimReference,
      name,
      company: company || '',
      telephone,
      email,
      policyNumber: policyNumber || '',
      dateOfIncident: dateOfIncident || '',
      details,
      createdAt: new Date().toISOString(),
      sheetName: 'Claims'
    };
    if (process.env.SHEETS_SECRET) payload['secret'] = process.env.SHEETS_SECRET;

    try {
      // debug-safe masked URL
    try { logger.debug('[claims] sending to webhook', String(sheetsWebhook).replace(/(.{6}).*(.{6})/, '$1...$2'), 'payloadKeys:', Object.keys(payload).join(',')); } catch {}

      const resp = await fetch(sheetsWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!resp.ok) {
        const bodyText = await resp.text().catch(() => 'no body');
  logger.error('Sheets webhook error (claims)', resp.status, bodyText);
        return NextResponse.json({ error: `Sheets webhook returned ${resp.status}`, body: bodyText }, { status: 502 });
      }

      const text = await resp.text().catch(() => '');
      let parsed: Record<string, unknown> = {};
      try { parsed = text ? JSON.parse(text) : {}; } catch { parsed = {}; }

      const parsedOk = typeof parsed['ok'] === 'boolean' ? parsed['ok'] === true : undefined;
      if (parsedOk === false) {
        const parsedErr = typeof parsed['error'] === 'string' ? parsed['error'] : undefined;
        return NextResponse.json({ error: parsedErr || 'Sheets reported failure', body: parsed }, { status: 502 });
      }

  return NextResponse.json({ ok: true, sheetSent: true });
      } catch (err: unknown) {
      logger.error('Error sending to Sheets webhook (claims)', err);
      const message = err instanceof Error ? err.message : String(err);
      return NextResponse.json({ error: message || 'Failed to send to sheets webhook' }, { status: 502 });
    }
  } catch (err: unknown) {
    logger.error('Claims API error', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message || 'Server error' }, { status: 500 });
  }
}
