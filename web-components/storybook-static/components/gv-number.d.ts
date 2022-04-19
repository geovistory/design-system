import type { Components, JSX } from "../types/components";

interface GvNumber extends Components.GvNumber, HTMLElement {}
export const GvNumber: {
  prototype: GvNumber;
  new (): GvNumber;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
