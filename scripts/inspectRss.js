(async () => {
  try {
  const { XMLParser } = await import('fast-xml-parser');
    const res = await fetch('https://www.insuranceage.co.uk/feeds/rss/category/insurer');
    const text = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
    const parsed = parser.parse(text);
    const items = parsed?.rss?.channel?.item || parsed?.channel?.item || parsed?.feed?.entry || parsed?.entry || [];
    const arr = Array.isArray(items) ? items : [items];
  if (process.env.DEBUG_RSS) console.log(JSON.stringify(arr.slice(0,5), null, 2));
  } catch (err) {
  if (process.env.DEBUG_RSS) console.error(err);
    process.exit(1);
  }
})();
