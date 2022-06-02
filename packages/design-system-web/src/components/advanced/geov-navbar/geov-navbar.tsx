import { Component, Host, h, Prop } from '@stencil/core';

interface NavbarLink {
  text: string,
  href: string
}


@Component({
  tag: 'geov-navbar',
  styleUrl: 'geov-navbar.css',
  shadow: false,
})
export class GeovNavbar {

  @Prop() logo: string;
  @Prop() height: string;

  @Prop() links: string;

  @Prop() login: string;
  @Prop() login_href: string;

  // other css properties
  @Prop() geovStyle: string = ''



  render() {

    const opt = {};
    this.geovStyle.split(';').forEach(pStr => {
      const name = pStr.substring(0, pStr.indexOf(':')).trim()
      const value = pStr.substring(pStr.indexOf(':') + 1).trim()
      if (name && value) opt[name] = value;
    })

    const links: Array<NavbarLink> = JSON.parse(this.links)


    return (
      <Host class="navbar" style={{ height: this.height, ...opt }}>
        <geov-row space-between fw>

          <geov-column>
            <geov-logo geovistory></geov-logo>
          </geov-column>

          <geov-row end alignCenter>

            {links.map((link, ind) => (
              <geov-button class="gap" href={link.href} ghost key={'navbar-link-' + ind}>{link.text}</geov-button>
            ))}

            {this.login ? <geov-divider class="gap-more" vertical height='30px' /> : ''}
            {this.login ? <geov-button class="gap" href={this.login_href} solid>{this.login}</geov-button> : ''}

          </geov-row>

        </geov-row>
      </Host>
    );
  }

}
