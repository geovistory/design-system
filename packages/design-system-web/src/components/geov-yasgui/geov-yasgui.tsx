import { Component, Host, h, Element, Prop } from '@stencil/core';
import type Yasgui from '@triply/yasgui';
import { importYasgui } from '../../lib/importYasgui';
import generatePluginMapCircles from './PluginMapCircles';

export type CustomPlugin = 'mapCircles';
export type BuiltInPlugin = 'response' | 'table';
export type Plugin = BuiltInPlugin | CustomPlugin;
type PluginConfig = { name: Plugin; config: any };

export interface QueryTab {
  name: string;
  sparqlEndpoint: string;
  query: string;
}
/**
 * Yasgui is a SPARQL query editor and results visualizer.
 *
 * The component is a wrapper around the Yasgui library it can also use custom plugins.
 */
@Component({
  tag: 'geov-yasgui',
  styleUrl: 'geov-yasgui.css',
  shadow: false,
})
export class GeovYasgui {
  @Element() el: HTMLElement;

  /**
   * Plugins to enable (in addition to the built-in plugins: response, table, error, boolean)
   */
  @Prop() plugins: Set<CustomPlugin> = new Set();

  /**
   * Collapse the GUI elements of Yasgui
   */
  @Prop() collapse: boolean = false;

  /**
   * The plugin initially activated
   */
  @Prop() defaultPlugin: Plugin = 'table';

  /**
   * The order of plugin tabs
   */
  @Prop() pluginOrder?: Plugin[] = ['table', 'response'];

  /**
   * The config of plugins
   */
  @Prop() pluginConfig?: { name: Plugin; config: PluginConfig }[] = [];

  /**
   * For each item in this array a tab will be added to Yasgui.
   * `QueryTab: { name: 'Tab name', sparqlEndpoint: 'https://...', query: 'SELECT ?s ?p ?o' }`
   */
  @Prop() queryTabs: QueryTab[] = [];

  Y: typeof Yasgui;

  async componentWillLoad() {
    this.Y = await importYasgui();
  }

  componentDidLoad() {
    this.setupYasr();
    localStorage.removeItem('yagui__config');
    if (!this.el) return;

    const toggleVisiblity = () => {
      const icon = this.el.querySelector('#display-query ion-icon');
      if (!this.collapse) {
        icon.setAttribute('name', 'eye-outline');
      } else {
        icon.setAttribute('name', 'eye-off-outline');
      }
      const elementsToSwitchVis = this.el.querySelectorAll('.yasr_header, .yasqe, .tabsList, .controlbar');
      elementsToSwitchVis.forEach(ele => {
        ele.classList.toggle('hidden');
      });
      this.collapse = !this.collapse;
    };
    const displayQueryButton = this.el.querySelector('#display-query') as HTMLElement;
    displayQueryButton.addEventListener('click', () => {
      toggleVisiblity();
    });

    const yasgui = new this.Y(this.el, {});

    // close initial tab
    if (this.queryTabs.length) yasgui.getTab().close();

    // add tabs
    const tabDefaults = this.Y.Tab.getDefaults();
    this.queryTabs.forEach((q, i) => {
      yasgui.addTab(
        i === 0,
        {
          ...tabDefaults,
          id: 'tab' + i,
          requestConfig: { ...tabDefaults.requestConfig, endpoint: q.sparqlEndpoint },
          name: q.name,
          yasqe: { value: q.query },
          yasr: {
            ...tabDefaults.yasr,
            settings: {
              selectedPlugin: this.defaultPlugin,
            },
          },
        },
        { avoidDuplicateTabs: true },
      );
    });

    // execute query of active tab
    yasgui.getTab().query();
    // hide GUI elements
    if (this.collapse) toggleVisiblity();
  }

  /**
   * Setup yasr configuration
   */
  setupYasr() {
    this.registerCustomPlugins();
    this.setPluginOrder();
  }

  /**
   * Register custom yasr plugins
   */
  registerCustomPlugins() {
    const customPlugins: { [key in CustomPlugin]: any } = {
      mapCircles: generatePluginMapCircles(this.pluginConfig?.find(p => p.name === 'mapCircles')?.config as any),
    };

    this.plugins?.forEach(plugin => {
      if (!!customPlugins[plugin]) this.Y.Yasr.registerPlugin(plugin, customPlugins[plugin]);
    });
  }

  /**
   * Set yasr plugin order
   */
  setPluginOrder() {
    this.Y.Yasr.defaults.pluginOrder = this.pluginOrder;
  }

  render() {
    return (
      <Host>
        <ion-button id="display-query" size="small">
          <ion-icon slot="icon-only" name="eye-outline"></ion-icon>
        </ion-button>
      </Host>
    );
  }
}
