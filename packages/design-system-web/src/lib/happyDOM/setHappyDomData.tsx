/**
 * Set the data to happyDOM wrapper element,
 * if we are on server with happyDOM.
 * @param data
 */

export function setHappyDomData(data: any, _happy_dom_id: string, element: any) {
  // @ts-ignore
  if (!window.happyDOM) return;

  const wrapper = getWrapper(element);
  if (wrapper) {

    // set the _happy_dom_id of the first element on the wrapper
    if (!wrapper._happy_dom_id) wrapper._happy_dom_id = _happy_dom_id;

    wrapper.data = {
      ...wrapper.data,
      [_happy_dom_id]: data,
    };
  }
}

export interface DataElement extends Element {
  _happy_dom_id?: string;
  data: any;
}

const getWrapper = (el: HTMLElement): DataElement => {
  const recurse = (element?: any): any => {
    if (!element) return;

    if (typeof element?.closest === 'function') {
      const el = element.closest('.happy-dom-wrapper');
      if (el) return el;
    }
    if (typeof element?.host?.closest === 'function') {
      const el2 = element.host.closest('.happy-dom-wrapper');
      if (el2) return el2;
    }
    const el: any = recurse(element?.parentNode);
    if (el) return el;

    const el2 = recurse(element?.host);
    if (el2) return el2;

    // else not found
    console.log('wrapper not found', element);
  };
  return recurse(el);
};
