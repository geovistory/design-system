import { Color } from '@ionic/core';
import { Component, Fragment, Prop, h } from '@stencil/core';
import { eye } from 'ionicons/icons';

/**
 * This component displays string literals (with and without language)
 *
 * If the displayed string is overflows, the component shows a button
 * to open a modal, where the full string is displayed.
 *
 * Resize the window to see the effect, in case the button is not displayed.
 */
@Component({
  tag: 'geov-display-string-literal',
  styleUrl: 'geov-display-string-literal.css',
  shadow: true,
})
export class GeovDisplayStringLiteralLiteral {
  /**
   * Color assigned to ion-item
   */
  @Prop() color: Color = '';
  /**
   * Title of the modal, that opens when user clicks on show button
   */
  @Prop() modalTitle: string;
  /**
   * The label (string) to display
   */
  @Prop() label: string;
  /**
   * The language to display on the second line. Will be prefixed with @.
   */
  @Prop() language: string;
  modal: HTMLIonModalElement;
  labelContainer: Element;
  itemButton: HTMLIonButtonElement;
  componentDidLoad() {
    this.resizePage();
    window.addEventListener('resize', this.handleResize);
  }

  resizePage() {
    // Display Expand button if need. The page must be loaded in order to have the measurements
    if (this.labelContainer && this.itemButton) {
      // If size of text > size of container
      if (this.labelContainer.scrollWidth > this.labelContainer.clientWidth) {
        this.itemButton.style.display = 'block';
      } else {
        this.itemButton.style.display = 'none';
      }
    }
  }

  handleResize = () => {
    this.resizePage();
  };

  open() {
    this.modal.present();
  }
  dismiss() {
    this.modal.dismiss();
  }
  render() {
    return (
      <Fragment>
        <ion-item color={this.color} lines="none">
          <ion-label class="literal-container">
            <h2 ref={element => (this.labelContainer = element)}>{this.label}</h2>
            {this.language && <p>@{this.language}</p>}
          </ion-label>
          <ion-button onClick={() => this.open()} ref={el => (this.itemButton = el as HTMLIonButtonElement)}>
            <ion-icon icon={eye}></ion-icon>
          </ion-button>
        </ion-item>

        <ion-modal ref={element => (this.modal = element)} onWillDismiss={() => this.dismiss()} isOpen={false}>
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="end">
                <ion-button onClick={() => this.dismiss()}>Close</ion-button>
              </ion-buttons>
              <ion-title>{this.modalTitle}</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">{this.label}</ion-content>
        </ion-modal>
      </Fragment>
    );
  }
}
