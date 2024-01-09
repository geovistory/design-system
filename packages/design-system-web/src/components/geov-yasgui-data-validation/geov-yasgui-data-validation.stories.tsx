import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
import type { Parser } from '@triply/yasr';

export default {
  title: 'Data Visualization Components/Yasgui/Data validation',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

const blueIsMyFavoriteColor = (val: Parser.BindingValue): Set<string> | undefined => {
  const errorMessages = new Set<string>();
  if (val.value != 'Blue') {
    errorMessages.add('This color is not "Blue"');
  }

  if (val.value == 'Red') {
    errorMessages.add('This color is "Red"');
  }

  if (val.value == 'Yellow') {
    errorMessages.add('This color is "Yellow"');
  }

  if (errorMessages.size > 0) {
    return errorMessages;
  }
};

const isValidDateFormat = (val: Parser.BindingValue): Set<string> | undefined => {
  const errorMessages = new Set<string>();

  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // JJ/MM/YYYY

  if (!dateRegex.test(val.value)) {
    errorMessages.add('Birthday date format is incorrect (JJ/MM/YYYY)"');
  }

  if (errorMessages.size > 0) {
    return errorMessages;
  }
};

const validData: Parser.Binding[] = [{ favoriteColor: { value: 'Blue', type: 'literal', datatype: 'string' } }, { age: { value: '12', type: 'literal', datatype: 'number' } }];

const missingData: Parser.Binding[] = [{ favoriteColor: { value: 'Blue', type: 'literal', datatype: 'string' } }];

const incorrectDatatype: Parser.Binding[] = [
  { favoriteColor: { value: 'Blue', type: 'literal', datatype: 'string' } },
  { age: { value: 'value2', type: 'literal', datatype: 'string' } },
];

const incorrectValue: Parser.Binding[] = [
  { favoriteColor: { value: 'Red', type: 'literal', datatype: 'string' } },
  { age: { value: 'value2', type: 'literal', datatype: 'number' } },
  { birthdayDate: { value: '01/01/2020', type: 'literal', datatype: 'string' } },
];

const incorrectValue2: Parser.Binding[] = [
  { favoriteColor: { value: 'Blue', type: 'literal', datatype: 'string' } },
  { age: { value: 'value2', type: 'literal', datatype: 'number' } },
  { birthdayDate: { value: '01012020', type: 'literal', datatype: 'string' } },
];

const expectedKeys = [
  { name: 'favoriteColor', required: true, datatype: 'string', customValidator: blueIsMyFavoriteColor },
  { name: 'age', required: true, datatype: 'number' },
  { name: 'birthdayDate', required: false, datatype: 'string', customValidator: isValidDateFormat },
];

export const Default = await stencilWrapper(<geov-yasgui-data-validation data={validData} expectedKeys={expectedKeys}></geov-yasgui-data-validation>);

export const RequiredMismatch = await stencilWrapper(<geov-yasgui-data-validation data={missingData} expectedKeys={expectedKeys}></geov-yasgui-data-validation>);

export const DatatypeMismatch = await stencilWrapper(<geov-yasgui-data-validation data={incorrectDatatype} expectedKeys={expectedKeys}></geov-yasgui-data-validation>);

export const incorrectData = await stencilWrapper(<geov-yasgui-data-validation data={incorrectValue} expectedKeys={expectedKeys}></geov-yasgui-data-validation>);

export const incorrectData2 = await stencilWrapper(<geov-yasgui-data-validation data={incorrectValue2} expectedKeys={expectedKeys}></geov-yasgui-data-validation>);

/**
 * See console (Validation completed: true)
 */
export const EmitValid = await stencilWrapper(
  <geov-yasgui-data-validation
    data={validData}
    expectedKeys={expectedKeys}
    onValidationCompleted={event => {
      console.log('Validation completed:', event.detail.isValid);
    }}
  ></geov-yasgui-data-validation>,
);

/**
 * See console (Validation completed: false)
 */
export const EmitError = await stencilWrapper(
  <geov-yasgui-data-validation
    data={missingData}
    expectedKeys={expectedKeys}
    onValidationCompleted={event => {
      console.log('Validation completed:', event.detail.isValid);
    }}
  ></geov-yasgui-data-validation>,
);
