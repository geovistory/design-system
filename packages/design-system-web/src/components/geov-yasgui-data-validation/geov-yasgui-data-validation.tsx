import { Component, Host, Prop, h, EventEmitter, Event } from '@stencil/core';
import type { Parser } from '@triply/yasr';

interface ExpectedKey {
  name: string;
  required: boolean;
  datatype: string;
  customValidator?: (val: Parser.BindingValue) => Set<string> | undefined;
}

@Component({
  tag: 'geov-yasgui-data-validation',
  styleUrl: 'geov-yasgui-data-validation.css',
  shadow: true,
})
export class GeovYasguiDataValidation {
  @Prop() data: Parser.Binding[];
  @Prop() expectedKeys: ExpectedKey[];

  @Event() validationCompleted: EventEmitter<{ isValid: boolean }>;

  requiredMismatch = new Set<string>();
  datatypeMismatch = new Set<string>();
  dataIsNotValid: { [key: string]: Set<string> } = {};

  componentWillLoad() {
    this.validateData();
  }

  private validateData() {
    this.requiredMismatch.clear();
    this.datatypeMismatch.clear();
    this.dataIsNotValid = {};

    const allDataKeys = Array.from(new Set(this.data.flatMap(obj => Object.keys(obj))));

    this.expectedKeys.forEach(expectedKey => {
      if (expectedKey.required && !allDataKeys.includes(expectedKey.name)) {
        this.requiredMismatch.add(expectedKey.name);
      }

      this.data.forEach(d => {
        if (d[expectedKey.name] !== undefined && d[expectedKey.name].datatype !== expectedKey.datatype) {
          this.datatypeMismatch.add(expectedKey.name);
        }
        if (expectedKey.customValidator !== undefined && d[expectedKey.name] !== undefined && expectedKey.customValidator(d[expectedKey.name]) !== undefined) {
          this.dataIsNotValid[expectedKey.name] = expectedKey.customValidator(d[expectedKey.name]);
        }
      });
    });

    // Emit the validationCompleted event with the validation results
    const isValid = this.requiredMismatch.size === 0 && this.datatypeMismatch.size === 0 && Object.keys(this.dataIsNotValid).length === 0;
    this.validationCompleted.emit({ isValid });
  }

  render() {
    return (
      <Host>
        {/* Render error messages for requiredMismatch */}
        {Array.from(this.requiredMismatch).map(key => (
          <div>The variable ?{key} must not return empty values. Currently it is either not bound or it returns empty records.</div>
        ))}

        {/* Render error messages for datatypeMismatch */}
        {Array.from(this.datatypeMismatch).map(key => (
          <div>
            The variable ?{key} must be of datatype {this.expectedKeys.find(e => e.name === key)?.datatype}. Some or all records do not match that data type.
          </div>
        ))}
        {/* Render error messages from customValidator */}
        {Object.keys(this.dataIsNotValid).map(key => (
          <div>
            Validation errors for variable ?{key}:
            {Array.from(this.dataIsNotValid[key]).map(message => (
              <div>{message}</div>
            ))}
          </div>
        ))}
        <slot></slot>
      </Host>
    );
  }
}
