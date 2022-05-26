import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-project-card',
  styleUrl: 'geov-project-card.css',
  shadow: false,
})
export class GeovProjectCard {

  @Prop() projectTitle: string;
  @Prop() projectDesc: string;
  @Prop() projectPageUrl: string;


  render() {
    return (
      <Host>
        <geov-card justify="space-between" height="230px" width="250px">

          <geov-row justify='start'>
            <geov-button
              variant="solid"
              rounded
              icon="arrow-right"
              icon-pos='end'
              icon-size='small'
              href={this.projectPageUrl}
            >Open</geov-button>
          </geov-row>

          <geov-column justify='start'>
            <geov-heading variant="h3">{this.projectTitle}</geov-heading>
            <geov-text variant="description" justify={'start'}>{this.projectDesc}</geov-text>
          </geov-column>


        </geov-card>
      </Host>
    );
  }

}
