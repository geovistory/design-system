/**
 * Converts a entity URI to the URI of its Time Span.
 *
 * If the uri ends on 'ts', we assume, it already is a timespan uri and return it.
 * Else we assume it is a normal geovistory uri and append 'ts' and return it.
 *
 * e.g:
 * http://.geovistory.org/resource/i868690 -> http://.geovistory.org/resource/i868690ts
 * http://.geovistory.org/resource/i868690ts -> http://.geovistory.org/resource/i868690ts
 *
 * @param uri g
 * @returns
 */

export function getTimeSpanUri(uri: string) {
  if (uri.endsWith('ts')) return uri;
  return uri + 'ts';
}
