

export function getHappyDomData(_happy_dom_id:string) {
  if (_happy_dom_id) {
    // @ts-ignore
    return window?.__NEXT_DATA__?.props?.pageProps?.happyDom?.[_happy_dom_id];
  }
}
