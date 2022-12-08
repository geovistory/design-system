import { Component, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'geov-toc',
  styleUrl: 'geov-toc.css',
  shadow: true,
})
export class GeovToc {
  @Element() el!: HTMLElement;
  @Prop({ mutable: true }) indentPx = 16;
  @State() toc;
  componentDidLoad() {
    console.log('r');
    this.toc = this.createToc();
  }
  render() {
    return (
      <Host>
        {this.toc}
        <slot></slot>
      </Host>
    );
  }
  createToc() {
    const tocItems: JSX.Element[] = [];

    if (this.el) {
      const getHref = (e: Element) => {
        const id = e?.getAttribute('id');
        return id ? `#${id}` : undefined;
      };
      const getText = (e: ChildNode) => {
        return e.textContent;
      };
      const scanElement = (element: ChildNode) => {
        element.childNodes?.forEach(e => {
          let headingLevel: number;
          switch (e.nodeName) {
            case 'H1':
              headingLevel = 1;
              break;
            case 'H2':
              headingLevel = 2;
              break;
            case 'H3':
              headingLevel = 3;
              break;
            case 'H4':
              headingLevel = 4;
              break;
            case 'H5':
              headingLevel = 5;
              break;
            case 'H6':
              headingLevel = 6;
              break;
          }
          if (headingLevel !== undefined) {
            const level = headingLevel - 1;
            const text = getText(e);
            const href = getHref(e as Element);
            const item = this.createTocItem(level, text, href);
            return tocItems.push(item);
          }
          if (e.nodeName === '#text') return;
          return scanElement(e);
        });
      };
      scanElement(this.el);
    }
    return <ion-list class="toc">{tocItems}</ion-list>;
  }
  createTocItem(level: number, text: string, href?: string) {
    const inner = <div style={{ paddingLeft: `${level * 16}px` }}>{text}</div>;
    return href ? (
      <ion-item href={href} detail={false}>
        {inner}{' '}
      </ion-item>
    ) : (
      <ion-item>{inner}</ion-item>
    );
  }
}
