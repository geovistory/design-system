import { IonApp, IonContent, IonGrid, IonItem, IonList, IonIcon } from '../../.storybook/react/component';

export default {
  title: 'Design/Overview',
  parameters: {
    previewTabs: { canvas: { hidden: true } },
    options: { showPanel: false },
  },
};

export const Overview = () => (
  <IonApp>
    <IonContent class="ion-padding">
      <IonGrid fixed>
        <h1>Design Overview</h1>
        <p className="lead">
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
          <IonList>
            <IonItem href="/?path=/story/design-layout--layout" lines="full">
              Layout (header, footer, responsive grid, ...)
            </IonItem>
            <IonItem href="/?path=/story/design-theming--theming" lines="full">
              Theming (theory, CSS custom variables, ...)
            </IonItem>
            <IonItem href="/?path=/story/design-theme-generator--theme-generator" lines="full">
              Theme generator (play around and change colors, fonts, spacings, ...)
            </IonItem>
            <IonItem href="https://ionicframework.com/docs/components" lines="full">
              Ionic Components (official documentation)
              <IonIcon name="open-outline" slot="end"></IonIcon>
            </IonItem>
            <IonItem href="https://ionic.io/ionicons" lines="full">
              Icons (official documentation)
              <IonIcon name="open-outline" slot="end"></IonIcon>
            </IonItem>
          </IonList>
        </p>
      </IonGrid>
    </IonContent>
  </IonApp>
);
