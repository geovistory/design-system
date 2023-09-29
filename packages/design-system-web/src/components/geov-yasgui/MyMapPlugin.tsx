import type Yasr from '@triply/yasr';
import type { Plugin } from '@triply/yasr';
import { mapOutline } from 'ionicons/icons';

export interface PluginConfig {}

export default class MyMapPlugin implements Plugin<PluginConfig> {
  // A priority value. If multiple plugin support rendering of a result, this value is used
  // to select the correct plugin
  priority = 10;

  // Whether to show a select-button for this plugin
  hideFromSelection = false;

  // Yasr instance
  yasr: Yasr;

  constructor(yasr: Yasr) {
    this.yasr = yasr;
  }

  // Draw the result set. This plugin simply draws the string 'True' or 'False'
  draw() {
    const el = document.createElement('geov-map-one');
    el.data = this.yasr.results.getBindings();
    this.yasr.resultsEl.appendChild(el);
  }

  // A required function, used to indicate whether this plugin can draw the current
  // resultset from yasr
  canHandleResults() {
    return true;
    // return this.yasr?.results?.getVariables()?.length > 0;
  }
  // A required function, used to identify the plugin, works best with an svg
  getIcon() {
    const textIcon = document.createElement('ion-icon');
    textIcon.icon = mapOutline;
    return textIcon;
  }
}
