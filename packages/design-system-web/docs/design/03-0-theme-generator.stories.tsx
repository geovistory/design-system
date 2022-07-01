import { IonApp, IonContent, IonHeader, IonItem, IonList, IonTitle } from '../../.storybook/react/component'

export default {
	title: 'Design/ThemeGenerator',
	parameters: {
		previewTabs: {
			canvas: { hidden: true }
		},
		options: {
			showPanel: false
		}
	}
}

export const ThemeGenerator = () => (
	<IonApp>
		<IonHeader class="ion-padding">
			<IonTitle size="large" color="primary">Theme Generator</IonTitle>
		</IonHeader>

		<IonContent class="ion-padding">
			<p>As described in the previous page, we made a theme generator where you can play with all CSS variables, see the result, and copy the related CSS to put directly in your app.</p>
			<p>Moreover, if you want related colors, Ionic has a <a href="https://ionicframework.com/docs/theming/color-generator">Color Generator</a> that, given the principales colors, creates associated shades and tints. You can have then the CSS on these pages and replace the following <code>:root{...}</code> elements.</p>
			<p className="ion-padding">
				Go to the theme generator for:
				<IonList>
					<IonItem><a href="/?path=/story/design-theme-generator-colors--theme-generator-colors">Colors</a></IonItem>
				</IonList>
			</p>
		</IonContent>
	</IonApp>
)