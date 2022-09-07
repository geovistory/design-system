/**
 * Set a key-value pair in `document.__STENCIL_DATA__`
 *
 * To make it work, ensure that `document.__STENCIL_DATA__` is an object,
 * e.g. by initializing the variable like this:
 * ```ts
 * document.__STENCIL_DATA__ = {}
 * ```
 *
 * When `document.__STENCIL_DATA__` is undefined or no object, the function
 * does nothing.
 *
 * @param key the key to set the data
 * @param val the value (data) to set
 */

export function setSSRData(key: string, val: any) {
  // @ts-ignore
  if (typeof document?.__STENCIL_DATA__ === 'object') document.__STENCIL_DATA__[key] = val;
}
