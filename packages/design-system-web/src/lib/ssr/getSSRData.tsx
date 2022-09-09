/**
 * Get data from `window?.__NEXT_DATA__?.props?.pageProps?._ssrData?.[key]`
 *
 * If nothing found, returns undefined.
 *
 * This is for using this component in combination with server side rendering of next.js.
 *
 * It is up to the server code to put the correct data at the given path:
 * `window?.__NEXT_DATA__?.props?.pageProps?._ssrData.[key]`
 *
 * @param key the key in `window?.__NEXT_DATA__?.props?.pageProps?._ssrData?.[key]` to get data from
 * @returns any
 */
export function getSSRData(key: string): any {
  if (key) {
    // @ts-ignore
    return window?.__NEXT_DATA__?.props?.pageProps?._ssrData?.[key];
  }
}
