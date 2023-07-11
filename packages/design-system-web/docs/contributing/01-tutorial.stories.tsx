import { h } from '@stencil/core';
import '../dist/components/ion-app ';
import '../dist/components/ion-content ';
import '../dist/components/ion-grid ';
import '../dist/components/ion-item ';
import '../dist/components/ion-list';

export default {
  title: 'Contributing/Tutorial',
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

export const Introduction = () => (
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Tutorial: Create a Geovistory Component </h1>
        <p class="lead">This page helps you to get started as Geovistory component developer.</p>

        <h4>Goal of the tutorial</h4>
        <p>
          In this tutorial you will create a component that takes an entity id as input and displays the class label of that entity. For example: For the id 'i98098' it will
          display 'Person'. The displayed string will be fetched from the{' '}
          <a target="_blank" href="https://www.geovistory.org/sparql">
            Geovistory SPARQL
          </a>{' '}
          endpoint.
        </p>

        <h4>Parts of the tutorial</h4>
        <p>
          <ion-list>
            <ion-item href="/?path=/story/contributing-tutorial-setup--setup" lines="full">
              Setup – setup your developer environment.
            </ion-item>
            <ion-item href="/?path=/story/contributing-tutorial-create-component--create-component" lines="full">
              Create Component – create a basic component.
            </ion-item>
            <ion-item href="/?path=/story/contributing-tutorial-data-fetching--data-fetching" lines="full">
              Data Fetching – fetch and display data from SPARQL entpoint.
            </ion-item>
          </ion-list>
        </p>
      </ion-grid>
    </ion-content>
  </ion-app>
);
