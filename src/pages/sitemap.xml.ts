import type { APIRoute } from 'astro';

// Sinh sitemap.xml từ toàn bộ trang đã build (loại trừ trang noindex).
const EXCLUDE = ['/404/', '/cam-on/', '/tim-kiem/', '/san-pham/nganh-hang-mo-rong/'];

export const GET: APIRoute = ({ site }) => {
  const pages = import.meta.glob('./**/*.astro', { eager: true });
  const routes = new Set<string>();
  for (const [file, mod] of Object.entries(pages)) {
    const m = mod as { getStaticPaths?: () => { params: Record<string, string> }[] };
    let route = file.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '/');
    if (route === '/index') route = '/';
    if (m.getStaticPaths) {
      for (const p of m.getStaticPaths()) {
        let r = route;
        for (const [k, v] of Object.entries(p.params)) r = r.replace(`[${k}]`, v);
        routes.add(r.endsWith('/') ? r : `${r}/`);
      }
    } else routes.add(route.endsWith('/') ? route : `${route}/`);
  }
  const urls = [...routes].filter((r) => !EXCLUDE.includes(r)).sort();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${new URL(u, site).href}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
