import { Component, Host, h, Element, Prop } from '@stencil/core';
import type Yasgui from '@triply/yasgui';
import { importYasgui } from '../../lib/importYasgui';
import generatePluginMapCircles, { MapCircleConfig } from './PluginMapCircles';
import { closeOutline, settingsOutline } from 'ionicons/icons';
import generatePluginTimeline, { TimelineConfig } from './PluginTimeline';

export type CustomPlugin = 'mapCircles' | 'timeline';
export type BuiltInPlugin = 'response' | 'table';
export type Plugin = BuiltInPlugin | CustomPlugin;

export interface PluginConfig {
  mapCircles?: MapCircleConfig;
  timeline?: TimelineConfig;
}

export interface QueryTab {
  name: string;
  sparqlEndpoint: string;
  query: string;
  selectedPlugin?: Plugin;
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
  @Prop() pluginConfig?: PluginConfig = {};

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
              selectedPlugin: q.selectedPlugin ?? this.defaultPlugin,
            },
          },
        },
        { avoidDuplicateTabs: true },
      );
    });

    // execute query of active tab
    yasgui.getTab().query();
    // set Yasque visibility
    this.setYasqueVisibility();
  }

  toggleVisiblity() {
    this.collapse = !this.collapse;
    this.setYasqueVisibility();
  }

  setYasqueVisibility() {
    const elementsToSwitchVis = this.el.querySelectorAll('.yasr_header, .yasqe, .tabsList, .controlbar');
    elementsToSwitchVis.forEach(ele => {
      this.collapse ? ele.classList.add('collapsed') : ele.classList.remove('collapsed');
    });
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
      mapCircles: generatePluginMapCircles(this.pluginConfig.mapCircles),
      timeline: generatePluginTimeline(this.pluginConfig.timeline),
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
        <ion-button class="toggle-button" size="small" onClick={() => this.toggleVisiblity()} title={this.collapse ? 'Show query' : 'Hide query'}>
          {this.collapse ? <ion-icon slot="icon-only" icon={settingsOutline}></ion-icon> : <ion-icon slot="icon-only" icon={closeOutline}></ion-icon>}
        </ion-button>
      </Host>
    );
  }
}
