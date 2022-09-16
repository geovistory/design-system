import { Component, Host, h, Prop, State } from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-ignore';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-json5';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-plsql';
import 'prismjs/components/prism-turtle';
import 'prismjs/components/prism-sparql';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-xquery';
import { copyOutline } from 'ionicons/icons';
export type Languages =
  | 'markup'
  | 'html'
  | 'xml'
  | 'css'
  | 'clike'
  | 'javascript'
  | 'bash'
  | 'git'
  | 'http'
  | 'ignore'
  | 'json'
  | 'json5'
  | 'plsql'
  | 'python'
  | 'jsx'
  | 'tsx'
  | 'sass'
  | 'scss'
  | 'sparql'
  | 'sql'
  | 'turtle'
  | 'typescript'
  | 'xquery';

@Component({
  tag: 'geov-code',
  styleUrl: 'geov-code.css',
  shadow: true,
})
export class GeovCode {
  @Prop() code: string;
  @Prop() language: Languages;
  @Prop() copyButton: boolean = true;

  @State() copied = false;
  copiedEl!: HTMLDivElement;

  render() {
    const grammar = Prism.languages[this.language];
    const className = 'language-' + this.language;
    const html = Prism.highlight(this.code, grammar, this.language);
    console.log(0);
    return (
      <Host>
        <pre>
          <code class={className} innerHTML={html}></code>
        </pre>
        {this.copyButton && (
          <ion-button class="copy-btn" size="small" fill="clear" onClick={() => this.copyToClipboard()} title="Copy to clipboard">
            <ion-icon slot="icon-only" icon={copyOutline}></ion-icon>
          </ion-button>
        )}
        <div class="copied" ref={el => (this.copiedEl = el as HTMLDivElement)}>
          copied
        </div>
      </Host>
    );
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copiedEl.style.display = 'block';
      setTimeout(() => {
        this.copiedEl.style.display = 'none';
      }, 2500);
    });
  }
}
