import { IonApp, IonContent, IonHeader, IonTitle } from '../../.storybook/react/component'


export default {
    title: 'Design/Layout',
    parameters: {
        previewTabs: {
            canvas: { hidden: true }
        },
        options: {
            showPanel: false
        }
    }
}


export const Layout = () => (
    <IonApp>
        <IonHeader class="ion-padding">
            <IonTitle size="large" color="primary">Layouts</IonTitle>
        </IonHeader>
        <IonContent class="ion-padding">
            <p className="ion-padding">Ionic has, built in, differents layouts usable out of the box (<code>ion-app</code>, <code>ion-header</code>, <code>ion-content</code>, <code>ion-footer</code>, <code>ion-grid</code>, <code>ion-col</code>, <code>ion-row</code>) that allow us to set the layout of pages and components.</p>
            <p className="ion-padding">For more information about the layout, find the official ionic documentation <a href="https://ionicframework.com/docs/layout/structure">here</a>.</p>
            <p className="ion-padding">For more information about the layout components, find the official ionic documentation: <a href="https://ionicframework.com/docs/api/pp">App</a>, <a href="https://ionicframework.com/docs/api/header">Header</a>, <a href="https://ionicframework.com/docs/api/content">Content</a>, <a href="https://ionicframework.com/docs/api/footer">Footer</a>, <a href="https://ionicframework.com/docs/api/grid">Grid</a>, <a href="https://ionicframework.com/docs/api/col">Columns</a>, <a href="https://ionicframework.com/docs/api/row">Rows</a></p>
        </IonContent>
    </IonApp>
)

