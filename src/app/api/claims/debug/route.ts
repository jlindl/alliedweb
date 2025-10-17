import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);
    // Note: header iteration isn't needed for this debug endpoint
    const headers = undefined;

    return NextResponse.json({
      ok: true,
      received: data,
      env: {
        SUPABASE_URL_present: !!process.env.SUPABASE_URL,
        SUPABASE_KEY_present: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      },
  headers,
      now: new Date().toISOString()
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message || 'Debug handler error' }, { status: 500 });
  }
}
