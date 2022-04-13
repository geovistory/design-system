import type { Components, JSX } from "../types/components";

interface GvPerson extends Components.GvPerson, HTMLElement {}
export const GvPerson: {
  prototype: GvPerson;
  new (): GvPerson;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
