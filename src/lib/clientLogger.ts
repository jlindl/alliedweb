const isProd = process.env.NODE_ENV === 'production';

const shouldLog = () => !isProd;

export const clientLogger = {
  log: (...args: unknown[]) => { if (shouldLog()) console.log(...args); },
  info: (...args: unknown[]) => { if (shouldLog()) console.info(...args); },
  warn: (...args: unknown[]) => { if (shouldLog()) console.warn(...args); },
  error: (...args: unknown[]) => { if (shouldLog()) console.error(...args); },
};

export default clientLogger;
