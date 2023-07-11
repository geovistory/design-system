import { h } from '@stencil/core';
// import '../dist/components/ion-app';
// import '../dist/components/ion-content';
// import '../dist/components/ion-grid';
// import '../dist/components/ion-text';
// import '../dist/components/ion-list';
// import '../dist/components/ion-item';
// import '../dist/components/ion-icon';
// import '../dist/components/ion-row';
// import '../dist/components/ion-col';
// import '../dist/components/ion-button';
import { defineCustomElements } from '../loader';
import { version } from '../package.json';
import { stencilWrapper } from '../src/helpers/stencilWrapper';
defineCustomElements();
export default {
  title: 'Welcome',
};

export const Welcome = stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>
          Geovistory Design System{' '}
          <ion-text color="medium" style={{ fontSize: '1rem' }}>
            v{version}
          </ion-text>
        </h1>
        <p class="lead">Geovistory Design System is a collection of components displaying semantic research data created by Geovistory projects.</p>
        <h2>Philosophy</h2>
        <p>
          Geovistory Design System is{' '}
          <a target="_blank" href="https://github.com/geovistory/design-system">
            open source
          </a>{' '}
          and community driven. The Geovistory{' '}
          <a target="_blank" href="https://www.geovistory.org/about-us">
            team
          </a>{' '}
          manages and pushes the development of the design system and encourages community contributions of any kind. We will be glad to welcome you're contribution!
        </p>
        <h2>Types of components</h2>
        <p>The system consists of two types of components: Ionic components and Geovistory components.</p>
        <h2>Technology</h2>
        <p>
          The components are coded as Stencil components. Doing so, we generate and publis framework agnostic Web component (w3c standard) as well as Angular and React components.
          They are published as npm packages.
        </p>
        <h2>Npm packages </h2>
        <p>
          <ion-list>
            <ion-item href="https://www.npmjs.com/package/@geovistory/design-system-web" target="_blank" lines="full">
              @geovistory/design-system-web: web components
              <ion-icon name="open-outline" slot="end"></ion-icon>
            </ion-item>
            <ion-item href="https://www.npmjs.com/package/@geovistory/design-system-react" target="_blank" lines="full">
              @geovistory/design-system-react: react components
              <ion-icon name="open-outline" slot="end"></ion-icon>
            </ion-item>
            <ion-item href="https://www.npmjs.com/package/@geovistory/design-system-angular" target="_blank" lines="full">
              @geovistory/design-system-angular: angular components
              <ion-icon name="open-outline" slot="end"></ion-icon>
            </ion-item>
          </ion-list>
        </p>

        <ion-grid>
          <ion-row>
            {/* <ion-col><ion-button>How to use?</ion-button></ion-col> */}
            <ion-col class="ion-text-center">
              <ion-button href="/?path=/story/contributing-ci-and-cd-workflow--ci-and-cd-workflow">Contribute</ion-button>
            </ion-col>
            <ion-col class="ion-text-center">
              <ion-button href="https://github.com/geovistory/design-system">
                <ion-icon name="logo-github"></ion-icon>&nbsp; Code on GitHub
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
