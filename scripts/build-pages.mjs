import { build } from 'vite';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const configFile = resolve('vite.pages.config.ts');
await build({ configFile });
await build({ configFile, build: {
  ssr: resolve('pages/render.tsx'), outDir: resolve('.pages-ssr'),
  emptyOutDir: true, copyPublicDir: false,
} });
const { render } = await import(pathToFileURL(resolve('.pages-ssr/render.js')).href);
const html = readFileSync('dist/pages/index.html', 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('Missing static render placeholder.');
writeFileSync('dist/pages/index.html', html.replace('<!--app-html-->', () => render()));
writeFileSync('dist/pages/.nojekyll', '');
console.log('GitHub Pages export ready: dist/pages');
