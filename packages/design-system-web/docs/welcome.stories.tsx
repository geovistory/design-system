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
        <IonText color="primary">
          <h1>Geovistory Design System</h1>
        </IonText>

        <p>
          The Geovistory Design System consists of two types of components: Ionic components and Geovistory components.
          <br />
          At Geovistory, we create components to display data from our research projects, and we are constently updating them, enhancing the behavior, and adding new ones.
          <br />
          We also encourage our community to participate to this development by creating commponents which answer to their specific needs. We will be glad to add them to the
          Geovistory project!
        </p>

        <p>
          The components are coded as Stencil components. Doing so, we have Angular, React and Web component versions of each component made, without having to redevelop everything
          for each technology. They are available through npm packages:
          <IonList>
            <IonItem>
              <a href="https://www.npmjs.com/package/@geovistory/design-system-web">@geovistory/design-system-web</a>: Web components
            </IonItem>
            <IonItem>
              <a href="https://www.npmjs.com/package/@geovistory/design-system-react">@geovistory/design-system-react</a>: React components
            </IonItem>
            <IonItem>
              <a href="https://www.npmjs.com/package/@geovistory/design-system-angular">@geovistory/design-system-angular</a>: Angular components
            </IonItem>
          </IonList>
        </p>

        <IonGrid>
          <IonRow>
            {/* <IonCol><IonButton>How to use?</IonButton></IonCol> */}
            <IonCol className="ion-text-center">
              <IonButton href="/?path=/story/contributing-ci-cd-workflow--page">Contribute</IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton href="https://github.com/geovistory">
                <IonIcon name="logo-github"></IonIcon>&nbsp;Check our GitHub
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonGrid>
    </IonContent>
  </IonApp>
);
