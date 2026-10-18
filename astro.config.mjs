import { defineConfig } from 'astro/config';

// TODO: đổi sang domain chính thức khi deploy
export default defineConfig({
  site: 'https://homichi.vn',
  trailingSlash: 'always',
  build: { format: 'directory', assets: 'assets', inlineStylesheets: 'always' },
  // nhúng script vào HTML để prototype mở được trực tiếp bằng file://
  vite: { build: { assetsInlineLimit: 100 * 1024 } },
});
