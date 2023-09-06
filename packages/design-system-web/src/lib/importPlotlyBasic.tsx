import type Plotly from 'plotly.js';
import { isNode } from './isNode';

/**
 * Load and return plotly library from CDN in browsers.
 * In node server environment returns null.
 * @returns Plotly (in browser) or null (in server)
 */
export const importPlotlyBasic = async () =>
  new Promise<typeof Plotly | null>((resolve, reject) => {
    // if we are on a node server resolve with null
    if (isNode()) return resolve(null);

    // if Plotly is already defined resolve it
    if ('Plotly' in window) {
      return resolve(window.Plotly);
    }

    // create new script element
    const script = document.createElement('script');

    // register on load callback and resolve Plotly
    script.onload = () => resolve(window.Plotly);

    // register on error callback and reject
    script.onerror = reject;

    // set url
    script.src = 'https://cdn.plot.ly/plotly-basic-2.23.2.min.js';

    // append script to load Plotly from CDN to document
    document.body.appendChild(script);
  });
