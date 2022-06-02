import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'geov-company-card',
  styleUrl: 'geov-company-card.css',
  shadow: false,
})
export class GeovCompanyCard {

  @Prop() name: string;
  @Prop() imageUrl: string;
  @Prop() description: string;
  @Prop() websiteUrl: string;

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
      <Host style={{...opt}}>
        <geov-card width="500px" height="200px" justify="space-between">

          <geov-row>
            <geov-button outline rounded
              href={this.websiteUrl}
              rightIcon='link'
            >Visit Website</geov-button>
          </geov-row>

          <geov-heading h1>{this.name}</geov-heading>

          <geov-row style={{flexGrow: '1',}}>
            <geov-column style={{ width: '125px', flexGrow: '1', marginRight: '10px'}}>
              <img src={this.imageUrl} style={{width: '100%', objectFit: 'contain'}} />
            </geov-column>

            <geov-column>
                <geov-text description start>{this.description}</geov-text>
            </geov-column>
          </geov-row>



        </geov-card>
      </Host>
    );
  }

}
