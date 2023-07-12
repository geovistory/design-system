import { VNode } from '@stencil/core';
import { renderVdom } from '@stencil/core/internal/client';
import { tsxToHTML } from './tsxToHtml';
type X = {
  (): Element;
  parameters: {
    docs: {
      source: {
        code: string;
      };
    };
  };
};

export const stencilWrapper = (vnode: VNode): X => {

  const host = document.createElement('ion-app');
  renderVdom(
    {
      $ancestorComponent$: undefined,
      $flags$: 0,
      $modeName$: undefined,
      $cmpMeta$: {
        $flags$: 0,
        $tagName$: 'ion-app',
      },
      $hostElement$: host,
    },
    vnode,
  );
  const element = host.children[0];

  const fn: X = () => element;
  fn.parameters = { docs: { source: { code: tsxToHTML(vnode) } } };
  return fn;
};
