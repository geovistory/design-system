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


  render() {
    return (
      <Host>
        <geov-card width="500px" height="200px" justify="space-between">

          <geov-row>
            <geov-button
              icon='link'
              iconPos='end'
              iconSize='small'
              href={this.websiteUrl}
              rounded
              variant='outline'
            >Visit Website</geov-button>
          </geov-row>

          <geov-heading variant="h1">{this.name}</geov-heading>

          <geov-row style={{flexGrow: '1',}}>
            <geov-column style={{ width: '125px', flexGrow: '1', marginRight: '10px'}}>
              <img src={this.imageUrl} style={{width: '100%', objectFit: 'contain'}} />
            </geov-column>

            <geov-column>
                <geov-text variant="description" justify="start">{this.description}</geov-text>
            </geov-column>
          </geov-row>



        </geov-card>
      </Host>
    );
  }

}
