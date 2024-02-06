import type Yasr from '@triply/yasr';
import type { Plugin } from '@triply/yasr';

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

    expectedKeys = [
      { name: 'entityLabel', required: true, datatype: 'string' },
      { name: 'entityClassLabel', required: true, datatype: 'string' },
      { name: 'entityUri', required: true, datatype: 'string' },
      { name: 'startDate', required: true, datatype: 'http://www.w3.org/2001/XMLSchema#date' },
      { name: 'endDate', required: true, datatype: 'http://www.w3.org/2001/XMLSchema#date' },
    ];

    constructor(yasr: Yasr) {
      this.yasr = yasr;
    }

    // Draw the result set. This plugin creates a <geov-timeline-gantt/ data=[...]>
    draw() {
      const elValidation = document.createElement('geov-yasgui-data-validation');
      const data = this.yasr.results.getBindings();
      elValidation.data = data;
      elValidation.expectedKeys = this.expectedKeys;
      this.yasr.resultsEl.appendChild(elValidation);

      // listen for the validation result
      elValidation.addEventListener('validationCompleted', (isValid: CustomEvent<boolean>) => {
        // if data is valid ...
        if (isValid.detail) {
          // create the timeline element
          const elTimeline = document.createElement('geov-timeline-gantt');
          elTimeline.data = data;

          // set height of timeline
          elTimeline.style.height = '400px';

          for (const key in config) {
            elTimeline[key] = config[key as keyof TimelineConfig];
          }
          // remove validation element
          this.yasr.resultsEl.removeChild(elValidation);
          // append timeline element
          this.yasr.resultsEl.appendChild(elTimeline);
        }
      });
    }

    // A required function, used to indicate whether this plugin can draw the current
    // resultset from yasr
    canHandleResults() {
      return !this.yasr.results.hasError();
    }
    // A required function, used to identify the plugin, works best with an svg
    getIcon() {
      const icon = document.createElement('div');
      icon.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm96 64H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm160 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>';
      return icon;
    }
  };
}
