import { IonApp, IonContent, IonHeader, IonItem, IonList, IonTitle } from '../../.storybook/react/component'
import SyntaxHighlighter from 'react-syntax-highlighter';

export default {
  title: 'Design/Theming',
  parameters: {
    previewTabs: {
      canvas: { hidden: true }
    },
    options: {
      showPanel: false
    }
  }
}


export const Theming = () => {

  const example = `
  /* in global.scss */
  :root {
    --ion-color-primary: #6b46c1; /* This line set the primary color to our beautiful purple */
  }
  ion-button {
    --border-radius: 15px; /* This line change the border radius of all buttons (even inside Geovistory components) */
  }
  `


  return (
    <IonApp>
      <IonHeader class="ion-padding">
        <IonTitle size="large" color="primary">Theming</IonTitle>
      </IonHeader>

      <IonContent class="ion-padding">

        <p className="ion-padding">The main asset in using Ionic components is that it is very easily and fully customizable. All the theming is set (and thus can be updated) via CSS variables.</p>

        <IonTitle color="primary">What does that mean for us?</IonTitle>
        <p className="ion-padding">Ionic components are defaultly styled with their colors, border radius, fonts, ... We come above and set our styling so that their component fit with our theme. It is exactly like that that we style this <i>Storybook</i>.</p>

        <IonTitle color="primary">What does that mean for you?</IonTitle>
        <p className="ion-padding">
          You could do exactly the same with Ionic components, and most importantly, with our components since we use only ionic components.<br /><br />
          How? Let say you want to use our family tree component in your project, but our purple does not fit with your green. No problem, just change the <code>--ion-color-primary</code> CSS variable, and all purple will be replaced with your color!<br /><br />
          Moreover, each ionic component have specific variables. For Example you could change the border radius of buttons: <code>ion-button</code> has custom css variables that allow user to change inside properties, <code>--border-radius</code> for the example. Change this property for the ion-button element, and all buttons, even in Geovistory components will change!
        </p>

        <IonTitle color="primary">Example</IonTitle>
        <SyntaxHighlighter language="scss">{example}</SyntaxHighlighter>

        <p className="ion-padding">All CSS variables are available in the <a href="https://ionicframework.com/docs/api">offical ionic documentation</a>. Look for the <i>CSS Custom Properties</i> chapter.</p>

        <IonTitle color="primary">I want my life even easier</IonTitle>
        <p className="ion-padding">To simplify the life of developpers, we have created a <a href="/?path=/story/design-theme-generator--page">Theme generator</a> in which you can set the colors, fonts, parameters... as you want, and directly see the result.<br/>Once you are confortable with every tweaks, you can easily copy paste the CSS containing all the CSS variables you updated and put them directly in your application.</p>

      </IonContent>
    </IonApp>
  )
}