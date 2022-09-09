/**
 * Sets the _ssrId of the given component.
 *
 * The generated _ssrId can be used in combination with the functions
 * `setSSRData()` and `getSSRData()`.
 *
 * To make it work, ensure that `document.__STENCIL_DATA__` is an object,
 * e.g. by initializing the variable like this:
 * ```ts
 * document.__STENCIL_DATA__ = {}
 * ```
 *
 * If the _ssrId is already set, it will not be overridden. This allows
 * you to have a predictable key to retrieve the fetched data with.
 *
 * Example:
 * ```ts
 * export class MyComponent {
 *   // reflect _ssrID on html attribute of component element
 *   @Prop({ reflect: true }) _ssrId?: string;
 *
 *   constructor() {
 *     setSSRId(this); // <- pass in the component
 *   }
 * }
 * ```
 *
 *
 * @param component the component instance
 */
export const setSSRId = (component: { _ssrId?: string }) => {
  // @ts-ignore
  if (document?.__STENCIL_DATA__ && !component._ssrId) {
    component._ssrId = generateUID();
  }
};
function generateUID() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  const firstPart = (Math.random() * 46656) | 0;
  const secondPart = (Math.random() * 46656) | 0;
  const f = ('000' + firstPart.toString(36)).slice(-3);
  const s = ('000' + secondPart.toString(36)).slice(-3);
  return f + s;
}
