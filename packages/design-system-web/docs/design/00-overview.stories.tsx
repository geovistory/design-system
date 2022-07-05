import { IonApp, IonContent, IonGrid, IonItem, IonList, IonText } from '../../.storybook/react/component';

export default {
  title: 'Design/Overview',
  parameters: {
    previewTabs: { canvas: { hidden: true } },
  },
};

export const Overview = () => (
  <IonApp>
    <IonContent>
      <IonGrid fixed>
        <h1>Design System Overview</h1>

        <p>
          Geovistory design system uses <a href="https://ionicframework.com/docs/components">ionic UI Components</a> (buttons, cards, checkboxes, lists etc.) as basic building
          blocks to create more complex components.
        </p>
        <p>
          Ionic UI components are <a href="https://github.com/ionic-team/ionic-framework">open source</a>, shipped as{' '}
          <a href="https://www.webcomponents.org/introduction">web components</a> (<a href="https://www.w3.org/TR/components-intro/">w3c standard</a>), integrate perfectly with{' '}
          <a href="https://stenciljs.com/">Stencil</a>, are easy and fully <a href="https://ionicframework.com/docs/theming/basics">stylable</a>, are well{' '}
          <a href="https://ionicframework.com/docs/components">documented</a>, mature and look good!
        </p>

        <p>
          Find in the next pages more informations about their work and how we use it for making great Geovistory components:
          <IonList>
            <IonItem>
              <a href="http://localhost:6006/?path=/story/design-layout--page">Layout</a>
            </IonItem>
            <IonItem>
              <a href="http://localhost:6006/?path=/story/design-theming--page">Theming</a>
            </IonItem>
            <IonItem>
              <a href="http://localhost:6006/?path=/story/design-theme-generator--page">Theme generator</a>
            </IonItem>
            <IonItem>
              <a href="https://ionic.io/ionicons">Icons</a>
            </IonItem>
          </IonList>
        </p>
      </IonGrid>
    </IonContent>
  </IonApp>
);
