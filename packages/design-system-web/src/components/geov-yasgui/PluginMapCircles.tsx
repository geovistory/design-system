import type Yasr from '@triply/yasr';
import type { Plugin } from '@triply/yasr';
import { mapOutline } from 'ionicons/icons';
import { Components } from '../../components';

export type MapCircleConfig = Partial<Omit<Components.GeovYasguiMapCircles, 'data'>> & {
  mapHeight?: string;
  tilesURL?: string;
  zoomLevelThreshold?: string;
};

export default function generatePluginMapCircles(config: MapCircleConfig) {
  return class PluginMapCircles implements Plugin<MapCircleConfig> {
    // A priority value. If multiple plugin support rendering of a result, this value is used
    // to select the correct plugin
    priority = 10;

    // Whether to show a select-button for this plugin
    hideFromSelection = false;

    // Yasr instance
    yasr: Yasr;

    label?: string = 'Map Circles';

    constructor(yasr: Yasr) {
      this.yasr = yasr;
    }
    expectedKeys: Components.GeovYasguiDataValidation['expectedKeys'] = [
      {
        name: 'radius',
        required: false,
        customValidator: val => {
          if (Number(val?.value) > 0) return;
          return new Set(['must be parsable to a number, and bigger than 0']);
        },
      },
      {
        name: 'number',
        required: false,
        customValidator: val => {
          if (!isNaN(Number(val?.value))) return;
          return new Set(['must be parsable to a number']);
        },
      },
      {
        name: 'long',
        required: true,
        customValidator: val => {
          const parsed = Number(val?.value);
          if (parsed >= -180 && parsed <= 180) return;
          return new Set(['must be parsable to a number in the range -180 and +180']);
        },
      },
      {
        name: 'lat',
        required: true,
        customValidator: val => {
          const parsed = Number(val?.value);
          if (parsed >= -90 && parsed <= 90) return;
          return new Set(['must be parsable to a number in the range -90 and +90']);
        },
      },
    ];

    // Draw the result set. This plugin creates a <geov-yasgui-map-circles/ data=[...]>
    draw() {
      const elValidation = document.createElement('geov-yasgui-data-validation');
      const data = this.yasr.results.getBindings();
      elValidation.data = data;
      elValidation.expectedKeys = this.expectedKeys;
      this.yasr.resultsEl.appendChild(elValidation);
      this.yasr.resultsEl.classList.add('ion-padding');

      // listen for the validation result
      elValidation.addEventListener('validationCompleted', (isValid: CustomEvent<boolean>) => {
        // if data is valid ...
        if (isValid.detail) {
          // create the timeline element
          const elVisual = document.createElement('geov-yasgui-map-circles');
          elVisual.data = data;
          elVisual.style.height = config?.mapHeight ?? '400px';
          for (const key in config) {
            elVisual[key] = config[key as keyof MapCircleConfig];
          }
          // remove validation element
          this.yasr.resultsEl.classList.remove('ion-padding');
          this.yasr.resultsEl.removeChild(elValidation);

          // append timeline element
          this.yasr.resultsEl.appendChild(elVisual);
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
      const textIcon = document.createElement('ion-icon');
      textIcon.icon = mapOutline;
      return textIcon;
    }
  };
}
