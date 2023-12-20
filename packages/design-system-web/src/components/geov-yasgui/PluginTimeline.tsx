import type Yasr from '@triply/yasr';
import type { Plugin } from '@triply/yasr';
import { mapOutline } from 'ionicons/icons';

export interface TimelineConfig {
  //...
}

export default function generatePluginTimeline(config: TimelineConfig) {
  return class PluginTimeline implements Plugin<TimelineConfig> {
    // A priority value. If multiple plugin support rendering of a result, this value is used
    // to select the correct plugin
    priority = 10;

    // Whether to show a select-button for this plugin
    hideFromSelection = false;

    // Yasr instance
    yasr: Yasr;

    label?: string = 'Timeline';

    constructor(yasr: Yasr) {
      this.yasr = yasr;
    }

    // Draw the result set. This plugin creates a <geov-timeline-gantt/ data=[...]>
    draw() {
      const el = document.createElement('geov-timeline-gantt');
      el.data = this.yasr.results.getBindings();
      for (const key in config) {
        el[key] = config[key as keyof TimelineConfig];
      }
      this.yasr.resultsEl.appendChild(el);
    }

    // A required function, used to indicate whether this plugin can draw the current
    // resultset from yasr
    canHandleResults() {
      return !this.yasr.results.hasError();
    }
    // A required function, used to identify the plugin, works best with an svg
    getIcon() {
      const textIcon = document.createElement('ion-icon');
      textIcon.icon = mapOutline;
      return textIcon;
    }
  };
}
