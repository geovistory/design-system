import { Component, Host, h, Prop } from '@stencil/core';

interface FeaturedProject {
  text: string,
  href: string
}

@Component({
  tag: 'geov-footer-geovistory',
  styleUrl: 'geov-footer-geovistory.css',
  shadow: false,
})
export class GeovFooterGeovistory {

  @Prop() featuredProjects: string

  // other css properties
  @Prop() geovStyle: string = ''

  render() {

    const opt = {};
    this.geovStyle.split(';').forEach(pStr => {
      const name = pStr.substring(0, pStr.indexOf(':')).trim()
      const value = pStr.substring(pStr.indexOf(':') + 1).trim()
      if (name && value) opt[name] = value;
    })

    const featuredProjects: Array<FeaturedProject> = JSON.parse(this.featuredProjects)
    console.log(featuredProjects);

    // featuredProjects.map(elt => )

    return (
      <Host style={{ ...opt }}>
        <geov-row>
          <geov-column class="footer-col first-col">
            <geov-row start fw><geov-logo geovistory-white></geov-logo></geov-row>
            <geov-row start fw><geov-heading h1 light>Who we are:</geov-heading></geov-row>
            <geov-row start fw>
              <geov-button solid rounded href="/about-geovistory" style={{ marginRight: '10px' }}>About Geovistory</geov-button>
              <geov-button solid rounded href="/about-us">About Us</geov-button>
            </geov-row>
            <geov-row start fw style={{ marginTop: '24px' }}>
              <geov-link light href="/imprint">Geovistory 2022 imprint</geov-link>
            </geov-row>
          </geov-column>

          <geov-column fh class="footer-col">
            <geov-row start fw><geov-heading h2>Featured project:</geov-heading></geov-row>
            <geov-column start alignStart fw>
              {featuredProjects.map((proj, ind) => <geov-link grey href={proj.href} style={{ marginBottom: '10px' }} key={'feat-proj-' + ind}>{proj.text}</geov-link>)}
            </geov-column>
          </geov-column>

          <geov-column start class="footer-col" style={{ overflow: 'hidden', display: 'block' }}>
            <div class="box">
              <geov-heading h2>Get started</geov-heading>

              <geov-row style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <geov-button rounded href="https://toolbox.geovistory.org/login" style={{ margin: '8px', flexGrow: '1' }}>Register</geov-button>
                <geov-button rounded href="https://toolbox.geovistory.org/login" style={{ margin: '8px', flexGrow: '1' }}>Log in</geov-button>
              </geov-row>
            </div>
          </geov-column>
        </geov-row>
      </Host>
    );
  }

}
