import { h } from '@stencil/core';
import { stencilWrapper } from '../../.storybook/lib/stencilWrapper';

export default {
  title: 'Design/Overview',
  parameters: {
    previewTabs: {
      'docs': { hidden: true },
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    options: { showPanel: false },
  },
};

export const Overview = stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Design Overview</h1>
        <p class="lead">
          To build beautiful and performant components, we use the basic <a href="https://ionicframework.com/docs/components">components of the Ionic framework</a> (like buttons,
          cards, checkboxes, lists etc.). These are great basic building blocks to create more complex geovistory components.
        </p>

        <h2>Why Ionic Framework?</h2>

        <p>
          UI components of the Ionic Frameworks are <a href="https://github.com/ionic-team/ionic-framework">open source</a>, shipped as{' '}
          <a href="https://www.webcomponents.org/introduction">web components</a> (<a href="https://www.w3.org/TR/components-intro/">w3c standard</a>), integrate perfectly with{' '}
          <a href="https://stenciljs.com/">Stencil</a>, are easy and fully <a href="https://ionicframework.com/docs/theming/basics">stylable</a>, are well{' '}
          <a href="https://ionicframework.com/docs/components">documented</a>, mature and look good!
        </p>
        <h2>What's in Geovistory design system?</h2>
        <p>Geovistory design system contains and ships all ionic components plus the geovistory components, that often internally use ionic components.</p>

        <h2>How to use?</h2>
        <p>Learn how to use and apply the geovistory design system:</p>
        <p>
          <ion-list>
            <ion-item href="/?path=/story/design-layout--layout" lines="full">
              Layout (header, footer, responsive grid, ...)
            </ion-item>
            <ion-item href="/?path=/story/design-theming--theming" lines="full">
              Theming (theory, CSS custom variables, ...)
            </ion-item>
            <ion-item href="/?path=/story/design-theme-generator--theme-generator" lines="full">
              Theme generator (play around and change colors, fonts, spacings, ...)
            </ion-item>
            <ion-item href="https://ionicframework.com/docs/components" lines="full">
              Ionic Components (official documentation)
              <ion-icon name="open-outline" slot="end"></ion-icon>
            </ion-item>
            <ion-item href="https://ionic.io/ion-icons" lines="full">
              Icons (official documentation)
              <ion-icon name="open-outline" slot="end"></ion-icon>
            </ion-item>
          </ion-list>
        </p>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
