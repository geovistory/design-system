import type { Components, JSX } from "../types/components";

interface GvButton extends Components.GvButton, HTMLElement {}
export const GvButton: {
  prototype: GvButton;
  new (): GvButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
