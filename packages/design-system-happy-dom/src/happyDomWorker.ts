import { parentPort, workerData } from 'node:worker_threads';

import { Window } from 'happy-dom';

const window = new Window();
// @ts-ignore
globalThis.window = window
// @ts-ignore
globalThis.document = window.document
// @ts-ignore
globalThis.customElements = window.customElements
// @ts-ignore
globalThis.HTMLElement = window.HTMLElement
// @ts-ignore
globalThis.fetch = window.fetch
// @ts-ignore
globalThis.requestAnimationFrame = window.requestAnimationFrame;
// @ts-ignore
globalThis.CustomEvent = window.CustomEvent;
// @ts-ignore
window.asyncTaskManager = window.happyDOM.asyncTaskManager

document.write(`
<html>
        <head>
        <base href="${workerData.baseURI}" target="_blank">
        </head>
        <body></body>
    </html>`)
let renderId = 0;

const start = async () => {
  const { defineCustomElements } = await import('@geovistory/design-system-web/loader')
  defineCustomElements()

  // wait one tick to wait for lazyLoaded stencil components
  await new Promise(res =>setTimeout(()=>{res(true)},100))

  // render web component(s) to html, including data fetching
  const document = globalThis.document;
  var div = document.createElement('div');
  div.setAttribute('class', 'happy-dom-wrapper');
  const id = 'happy-dom-wrapper-' + renderId;
  renderId++;
  div.setAttribute('id', id);
  div.setAttribute('class', 'happy-dom-wrapper');
  div.innerHTML = workerData.html.trim();
  document.body.appendChild(div)


  const wrapper = window?.document?.body?.querySelector('#' + id);

  // wait one tick to let components add async tasks
  await new Promise(res =>setTimeout(()=>{res(true)},0))

  return window.happyDOM.whenAsyncComplete().then(() => {
      document.body.removeChild(div)
      // @ts-ignore
      const data = wrapper.data
      // @ts-ignore
      const _happy_dom_id = wrapper._happy_dom_id
      // console.log(data);

      // Do something when all async tasks are completed.
      const html = wrapper?.getInnerHTML({ includeShadowRoots: true })
      // console.log(html);
      return { data, html, _happy_dom_id }
  });


}

start().then((res) => {
  parentPort?.postMessage({ success: res });
}).catch(e => parentPort?.postMessage({ error: e }))