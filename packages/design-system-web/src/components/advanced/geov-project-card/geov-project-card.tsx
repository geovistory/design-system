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

  // other css properties
  @Prop() geovStyle: string = ''




  render() {

    const opt = {};
    this.geovStyle.split(';').forEach(pStr => {
      const name = pStr.substring(0, pStr.indexOf(':')).trim()
      const value = pStr.substring(pStr.indexOf(':') + 1).trim()
      if (name && value) opt[name] = value;
    })

    return (
      <Host style={{ ...opt }}>
        <geov-card justify="space-between" height="230px" width="250px">

          <geov-row start>
            <geov-button solid rounded
              rightIcon="arrow-right"
              href={this.projectPageUrl}
            >Open</geov-button>
          </geov-row>

          <geov-column start>
            <geov-heading h3>{this.projectTitle}</geov-heading>
            <geov-text description start>{this.projectDesc}</geov-text>
          </geov-column>


        </geov-card>
      </Host>
    );
  }

}
