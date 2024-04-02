import { Component, Host, Prop, h, EventEmitter, Event } from '@stencil/core';
import type { Parser } from '@triply/yasr';

export interface ExpectedKey {
  name: string;
  required: boolean;
  datatype?: string;
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

    this.expectedKeys.forEach(expectedKey => {
      // we iterate over rows
      this.data.forEach(row => {
        // check if required key is available in this row
        if (expectedKey.required && row[expectedKey.name] === undefined) {
          this.requiredMismatch.add(expectedKey.name);
        }

        // iterate over cells in row
        for (const bindingKey in row) {
          if (Object.prototype.hasOwnProperty.call(row, bindingKey)) {
            // get the cell
            const cell = row[bindingKey];

            // if there is a validation defined for this binding key...
            if (expectedKey.name === bindingKey) {
              // ...check datatype
              if (expectedKey.datatype && (cell?.datatype ?? 'string') !== expectedKey.datatype) {
                this.datatypeMismatch.add(expectedKey.name);
              }
              // ...check custom validator
              if (expectedKey?.customValidator && typeof expectedKey.customValidator === 'function') {
                const customValidationError = expectedKey.customValidator(cell);
                if (customValidationError) this.dataIsNotValid[expectedKey.name] = customValidationError;
              }
            }
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
      </Host>
    );
  }
}
