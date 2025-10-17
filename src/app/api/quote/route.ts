import { NextResponse } from 'next/server';
import logger from '../../../lib/logger';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, companyName, email, phone, details } = data || {};

    if (!name || !email || !phone || !details) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!sheetsWebhook) {
      return NextResponse.json({ error: 'Sheets webhook not configured' }, { status: 500 });
    }

    try {
      const resp = await fetch(sheetsWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          companyName,
          email,
          phone,
          details,
          createdAt: new Date().toISOString()
        })
      });

      if (!resp.ok) {
        const bodyText = await resp.text().catch(() => 'no body');
        logger.error('Sheets webhook error', resp.status, bodyText);
        return NextResponse.json({ error: `Sheets webhook returned ${resp.status}`, body: bodyText }, { status: 502 });
      }

      return NextResponse.json({ ok: true, sheetSent: true });
      } catch (err: unknown) {
      logger.error('Error sending to Sheets webhook', err);
      const message = err instanceof Error ? err.message : String(err);
      return NextResponse.json({ error: message || 'Failed to send to sheets webhook' }, { status: 502 });
    }
  } catch (err: unknown) {
    logger.error('Quote API error', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message || 'Server error' }, { status: 500 });
  }
}
