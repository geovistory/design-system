import { IonApp, IonContent, IonGrid, IonItem, IonList, IonText, IonCol, IonRow, IonButton, IonIcon } from '../.storybook/react/component';

export default {
  title: 'Welcome',
  parameters: {
    previewTabs: { canvas: { hidden: true } },
    options: { showPanel: false },
  },
};

export const Welcome = () => (
  <IonApp>
    <IonContent>
      <IonGrid fixed>
        <h1>Geovistory Design System</h1>
        <p className="lead">Geovistory Design System is a collection components displaying semantic research data created by Geovistory projects.</p>
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
        <h2>Types of componets</h2>
        <p>The system consists of two types of components: Ionic components and Geovistory components.</p>
        <h2>Technology</h2>
        <p>
          The components are coded as Stencil components. Doing so, we generate and publis framework agnostic Web component (w3c standard) as well as Angular and React components.
          They are published as npm packages.
        </p>
        <h2>Npm packages </h2>
        <p>
          <IonList>
            <IonItem href="https://www.npmjs.com/package/@geovistory/design-system-web" target="_blank" lines="full">
              @geovistory/design-system-web: web components
              <IonIcon name="open-outline" slot="end"></IonIcon>
            </IonItem>
            <IonItem href="https://www.npmjs.com/package/@geovistory/design-system-react" target="_blank" lines="full">
              @geovistory/design-system-react: react components
              <IonIcon name="open-outline" slot="end"></IonIcon>
            </IonItem>
            <IonItem href="https://www.npmjs.com/package/@geovistory/design-system-angular" target="_blank" lines="full">
              @geovistory/design-system-angular: angular components
              <IonIcon name="open-outline" slot="end"></IonIcon>
            </IonItem>
          </IonList>
        </p>

        <IonGrid>
          <IonRow>
            {/* <IonCol><IonButton>How to use?</IonButton></IonCol> */}
            <IonCol className="ion-text-center">
              <IonButton href="/?path=/story/contributing-ci-and-cd-workflow--ci-and-cd-workflow">Contribute</IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton href="https://github.com/geovistory/design-system">
                <IonIcon name="logo-github"></IonIcon>&nbsp; Code on GitHub
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonGrid>
    </IonContent>
  </IonApp>
);
