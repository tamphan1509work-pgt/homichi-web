import { defineConfig } from 'astro/config';

// TODO: đổi sang domain chính thức khi deploy
export default defineConfig({
  site: 'https://homichi.vn',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
