import type { Mermaid } from 'mermaid';
import { isNode } from './isNode';

/**
 * Load and return mermaid library from CDN in browsers.
 * In node server environment returns null.
 * @returns Mermaid (in browser) or null (in server)
 */
export const importMermaid = async () =>
  new Promise<Mermaid | null>((resolve, reject) => {
    // if we are on a node server resolve with null
    if (isNode()) return resolve(null);

    // if mermaid is already defined resolve it
    if ('mermaid' in window) {
      return resolve(window['mermaid'] as Mermaid);
    }

    // create new script element
    const script: HTMLScriptElement = document.createElement(`script`);

    // set type
    script.type = 'module';

    // create event names
    const loadedChannel = 'mermaid-loaded' as keyof WindowEventMap;
    const errorChannel = 'mermaid-loading-error' as keyof WindowEventMap;

    script.innerHTML = `
      try {
        // load mermaid
        var mermaid = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');

        // add to window
        window.mermaid = mermaid.default;

        // dispatch loaded event
        window.dispatchEvent(new Event("${loadedChannel}"));

      } catch (error) {
        // dispatch error event
        window.dispatchEvent(new CustomEvent("${errorChannel}", {detail: error}));
      }
    `;

    // callback on mermaid loaded
    const onLoaded = () => {
      // unregister the event listener
      window.removeEventListener(loadedChannel, onLoaded);

      // resolve
      resolve(window['mermaid'] as Mermaid);
    };

    // register on load callback and resolve Plotly
    window.addEventListener(loadedChannel, onLoaded);

    // callback on mermaid loading error
    const onError = error => {
      // unregister the event listener
      window.removeEventListener(errorChannel, onError);

      // resolve
      reject(error.detail);
    };

    // register on load callback and resolve Plotly
    window.addEventListener(errorChannel, onError);

    // append script to load Plotly from CDN to document
    document.body.appendChild(script);
  });
