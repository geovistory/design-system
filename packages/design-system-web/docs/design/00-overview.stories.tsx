import { IonApp, IonContent, IonHeader, IonItem, IonList, IonTitle } from '../../.storybook/react/component'

export default {
    title: 'Design/Overview',
    parameters: {
        previewTabs: { canvas: { hidden: true } }
    }
}

export const Overview = () => (
    <IonApp>
        <IonHeader class="ion-padding">
            <IonTitle size="large" color="primary">Design System Overview</IonTitle>
        </IonHeader>
        <IonContent class="ion-padding">

            <p className="ion-padding">
                Geovistory design system uses <a href="https://ionicframework.com/docs/components">ionic UI Components</a> (buttons, cards, checkboxes, lists etc.) as basic building blocks to create more complex components.
            </p>
            <p className="ion-padding">
                Ionic UI components are <a href="https://github.com/ionic-team/ionic-framework">open source</a>, shipped as <a href="https://www.webcomponents.org/introduction">web components</a> (<a href="https://www.w3.org/TR/components-intro/">w3c standard</a>), integrate perfectly with <a href="https://stenciljs.com/">Stencil</a>, are easy and fully <a href="https://ionicframework.com/docs/theming/basics">stylable</a>, are well <a href="https://ionicframework.com/docs/components">documented</a>, mature and look good!
            </p>

            <p className="ion-padding">
                Find in the next pages more informations about their work and how we use it for making great Geovistory components:

                <IonList>
                    <IonItem><a href="http://localhost:6006/?path=/story/design-layout--page">Layout</a></IonItem>
                    <IonItem><a href="http://localhost:6006/?path=/story/design-theming--page">Theming</a></IonItem>
                    <IonItem><a href="http://localhost:6006/?path=/story/design-theme-generator--page">Theme generator</a></IonItem>
                    <IonItem><a href="https://ionic.io/ionicons">Icons</a></IonItem>
                </IonList>
            </p>

        </IonContent>
    </IonApp>
)
