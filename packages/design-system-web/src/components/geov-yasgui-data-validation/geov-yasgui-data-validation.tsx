import { Component, Host, Prop, h, EventEmitter, Event } from '@stencil/core';
import type { Parser } from '@triply/yasr';

interface ExpectedKey {
  name: string;
  required: boolean;
  datatype: string;
  customValidator?: (val: Parser.BindingValue) => Set<string> | undefined;
}
/**
 * The component validates data and emits the validation result (valid/invalid).
 *
 * It has two required inputs: `data` (the input data to be validated) and 'expectedKeys' (an array of expected keys containing the validation rules).
 *
 * The component emits a custom event named "validationCompleted" with a boolean value:
 *   - true if the validation passes,
 *   - false if there are validation errors.
 *
 * In case of invalid data, it displays understandable warnings/error messages.
 */
@Component({
  tag: 'geov-yasgui-data-validation',
  styleUrl: 'geov-yasgui-data-validation.css',
  shadow: true,
})
export class GeovYasguiDataValidation {
  @Prop() data: Parser.Binding[];
  @Prop() expectedKeys: ExpectedKey[];
  @Event() validationCompleted: EventEmitter<boolean>;

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
        if ((d[expectedKey.name]?.datatype || 'string') !== expectedKey.datatype && Object.keys(d)[0] === expectedKey.name) {
          this.datatypeMismatch.add(expectedKey.name);
        }
        if (expectedKey?.customValidator && typeof expectedKey.customValidator === 'function' && Object.keys(d)[0] === expectedKey.name) {
          if (expectedKey.customValidator(d[expectedKey.name])) {
            this.dataIsNotValid[expectedKey.name] = expectedKey.customValidator(d[expectedKey.name]);
          }
        }
      });
    });

    // Emit the validationCompleted event with the validation results
    const isValid = this.requiredMismatch.size === 0 && this.datatypeMismatch.size === 0 && Object.keys(this.dataIsNotValid).length === 0;
    this.validationCompleted.emit(isValid);
  }

  render() {
    return (
      <Host>
        {/* Render error messages for requiredMismatch */}
        {Array.from(this.requiredMismatch).map(key => (
          <p>The variable ?{key} must not return empty values. Currently it is either not bound or it returns empty records.</p>
        ))}

        {/* Render error messages for datatypeMismatch */}
        {Array.from(this.datatypeMismatch).map(key => (
          <p>
            The variable ?{key} must be of datatype {this.expectedKeys.find(e => e.name === key)?.datatype}. Some or all records do not match that data type.
          </p>
        ))}
        {/* Render error messages from customValidator */}
        {Object.keys(this.dataIsNotValid).map(key => (
          <div>
            Validation errors for variable ?{key}:
            <ul>
              {Array.from(this.dataIsNotValid[key]).map(message => (
                <li>{message}</li>
              ))}
            </ul>
          </div>
        ))}
        <slot></slot>
      </Host>
    );
  }
}
