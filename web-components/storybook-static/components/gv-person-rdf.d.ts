import type { Components, JSX } from "../types/components";

interface GvPersonRdf extends Components.GvPersonRdf, HTMLElement {}
export const GvPersonRdf: {
  prototype: GvPersonRdf;
  new (): GvPersonRdf;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
