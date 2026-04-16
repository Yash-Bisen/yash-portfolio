import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const distDir = path.resolve(__dirname, '..', 'dist');
  const clientAssetsDir = path.join(distDir, 'client', 'assets');
  try {
    // ensure server.js exists
    const serverIndex = path.join(distDir, 'server', 'index.js');
    const serverOut = path.join(distDir, 'server', 'server.js');
    try {
      await fs.copyFile(serverIndex, serverOut);
      console.log("Copied server index to server.js");
    } catch (err) {
      console.warn('Could not copy server index:', err.message);
    }

    const files = await fs.readdir(clientAssetsDir);
    const css = files.find((f) => f.startsWith('styles-') && f.endsWith('.css'));
    const jsIndexFiles = files.filter((f) => f.startsWith('index-') && f.endsWith('.js'));

    if (!jsIndexFiles.length) {
      console.error('No client index JS files found in', clientAssetsDir);
      return;
    }

    const html = `<!doctype html>\n<html>\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <title>Modern Mosaic Maze</title>\n  ${css ? `<link rel="stylesheet" href="./client/assets/${css}">` : ''}\n</head>\n<body>\n  <div id="root"></div>\n  ${jsIndexFiles.map((f) => `<script type="module" src="./client/assets/${f}"></script>`).join('\n  ')}\n</body>\n</html>`;

    await fs.writeFile(path.join(distDir, 'index.html'), html);
    console.log('Wrote dist/index.html');

    // also ensure _redirects for Netlify single-page fallback exists at dist/_redirects
    const redirectsSrc = path.join(distDir, 'client', '_redirects');
    const redirectsDest = path.join(distDir, '_redirects');
    try {
      await fs.copyFile(redirectsSrc, redirectsDest);
      console.log('Copied _redirects to dist');
    } catch (err) {
      console.warn('Could not copy _redirects:', err.message);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
