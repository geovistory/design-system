import type Yasgui from '@triply/yasgui';
import { isNode } from './isNode';

/**
 * Load and return plotly library from CDN in browsers.
 * In node server environment returns null.
 * @returns Yasgui (in browser) or null (in server)
 */
export const importYasgui = async () =>
  new Promise<typeof Yasgui | null>((resolve, reject) => {
    // if we are on a node server resolve with null
    if (isNode()) return resolve(null);

    // if Yasgui is already defined resolve it
    if ('Yasgui' in window) {
      return resolve(window['Yasgui'] as typeof Yasgui);
    }

    // create new script element
    const script = document.createElement('script');

    // register on load callback and resolve Yasgui
    script.onload = () => resolve(window['Yasgui'] as typeof Yasgui);

    // register on error callback and reject
    script.onerror = reject;

    // set url
    script.src = 'https://cdn.jsdelivr.net/npm/@triply/yasgui@4.2.28/build/yasgui.min.js';

    // append script to load Yasgui JS from CDN to document
    document.body.appendChild(script);

    // create new link element
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@triply/yasgui@4.2.28/build/yasgui.min.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';

    // append link to load Yasgui CSS from CDN to document
    document.body.appendChild(link);
  });
