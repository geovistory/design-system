/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import { VNode } from '@stencil/core';
import { renderVdom } from '@stencil/core/internal/client';
import type { StoryObj } from '@storybook/web-components';
import { tsxToHTML } from './tsxToHtml';

export const stencilWrapper = (vnode: VNode): StoryObj => {
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

  const fn: StoryObj = () => element;
  fn.parameters = {
    docs: {
      canvas: { sourceState: 'shown' },
      source: { code: tsxToHTML(vnode) },
      story: { inline: true },
    },
  };
  return fn;
};
