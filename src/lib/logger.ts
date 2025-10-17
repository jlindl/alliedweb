export const isProd = process.env.NODE_ENV === 'production';
const level = process.env.LOG_LEVEL || 'info';

function shouldLog(method: string) {
  if (isProd) return false; // avoid verbose logs in production by default
  if (level === 'debug') return true;
  if (level === 'info' && method !== 'debug') return true;
  return false;
}

export const logger = {
  debug: (...args: unknown[]) => { if (shouldLog('debug')) console.debug('[debug]', ...args); },
  info: (...args: unknown[]) => { if (shouldLog('info')) console.info('[info]', ...args); },
  warn: (...args: unknown[]) => { if (!isProd) console.warn('[warn]', ...args); },
  error: (...args: unknown[]) => { if (!isProd) console.error('[error]', ...args); },
};

export default logger;
