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

    // Create a safe static fallback index.html (do not include client JS)
    const resumeFile = (await fs.readdir(path.join(distDir, 'client'))).find((f) => /resume|cv/i.test(f));
    const resumeLink = resumeFile ? `./client/${resumeFile}` : './client/assets/yash-resume.pdf';
    const title = 'Yash Bisen — Portfolio (Static)';
    const description = 'Frontend developer. This is a static fallback deployed to Netlify.';
    const html = `<!doctype html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>${title}</title>\n  ${css ? `<link rel=\"stylesheet\" href=\"./client/assets/${css}\">` : ''}\n  <style>body{font-family:Inter,system-ui,Arial,sans-serif;margin:0;padding:40px;background:#f8fafc;color:#0f172a}main{max-width:980px;margin:0 auto}h1{margin:0 0 8px}a.btn{display:inline-block;margin-top:12px;padding:10px 14px;background:#06b6d4;color:#fff;border-radius:8px;text-decoration:none}</style>\n</head>\n<body>\n  <main>\n    <h1>${title}</h1>\n    <p>${description}</p>\n    <p>Interactive features disabled — this is a static fallback to make the site visible on Netlify.</p>\n    <a class=\"btn\" href=\"${resumeLink}\" target=\"_blank\">Download Resume</a>\n    <section style=\"margin-top:28px\">\n      <h2>Notes</h2>\n      <ul>\n        <li>The original app uses server-side rendering; to enable full functionality deploy to Cloudflare Workers or use Netlify Functions.</li>\n        <li>This fallback ensures Netlify serves visible content without client hydration errors.</li>\n      </ul>\n    </section>\n  </main>\n</body>\n</html>`;

    await fs.writeFile(path.join(distDir, 'index.html'), html, 'utf8');
    console.log('Wrote static dist/index.html (fallback)');

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
