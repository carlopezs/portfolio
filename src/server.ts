import { getContext } from '@netlify/angular-runtime/context';
import { APP_BASE_HREF } from '@angular/common';
import { isMainModule } from '@angular/ssr/node';
import { AngularAppEngine } from '@angular/ssr';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';
import { render } from '@netlify/angular-runtime/common-engine'

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const angularAppEngine = new AngularAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

app.use((req, res, next) => {
  console.log(`📄 Sirviendo archivo estático: ${req.path}`);
  next();
});



/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html'
  }),
);


export async function handler(event: any, context: any): Promise<any> {
  const request = new Request(event.rawUrl, {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body,
  });

  const result = await angularAppEngine.handle(request, getContext());
  if (result) {
    return {
      statusCode: result.status,
      headers: Object.fromEntries(result.headers.entries()),
      body: await result.text(),
    };
  } else {
    return {
      statusCode: 404,
      body: 'Not found',
    };
  }
}

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
