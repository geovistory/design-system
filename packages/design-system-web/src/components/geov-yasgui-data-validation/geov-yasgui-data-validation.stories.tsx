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

const checkLatitudeLongitude = (d: Parser.BindingValue): Set<string> | undefined => {
  const errorMessages = new Set<string>();
  const lat: number = parseFloat(d.value);

  if (isNaN(lat)) {
    errorMessages.add("Value can't be parsed in number");
  } else {
    if (lat > 90) {
      errorMessages.add('Value must not be bigger than 90');
    }
    if (lat < -90) {
      errorMessages.add('Value must not be smaller than -90');
    }
  }

  if (errorMessages.size > 0) {
    return errorMessages;
  }
};

const positiveNumber = (d: Parser.BindingValue): Set<string> | undefined => {
  const errorMessages = new Set<string>();
  const nb: number = parseFloat(d.value);

  if (isNaN(nb)) {
    errorMessages.add("Value can't be parsed in number");
  } else {
    if (nb < 0) {
      errorMessages.add('Value must not be negative');
    }
  }

  if (errorMessages.size > 0) {
    return errorMessages;
  }
};
const dataExample: Parser.Binding[] = [
  { name: { value: 'Lyon', type: 'literal' } }, // Datatype is missing: it's automatically a string
  { latitude: { value: '45.75', type: 'literal', datatype: 'number' } },
  { longitude: { value: '4.85', type: 'literal', datatype: 'number' } },
  { population: { value: '530000', type: 'literal', datatype: 'number' } },
];

const dataMissingLatitudeAndLongitudeExample: Parser.Binding[] = [
  { name: { value: 'Paris', type: 'literal', datatype: 'string' } },
  // Missing latitude,
  // Missing longitude,
  { population: { value: '2145906', type: 'literal', datatype: 'number' } },
];

const dataIncorrectDatatypeLatitudeAndLongitudeExample: Parser.Binding[] = [
  { name: { value: 'Basel', type: 'literal', datatype: 'string' } },
  { latitude: { value: '47.56', type: 'literal', datatype: 'string' } }, // Incorrect datatype,
  { longitude: { value: '7.59', type: 'literal', datatype: 'string' } }, // Another incorrect datatype,
  { population: { value: '174000', type: 'literal', datatype: 'number' } },
];

const dataIncorrectValueLatitudeAndLongitudeExample: Parser.Binding[] = [
  { name: { value: 'Unknown', type: 'literal', datatype: 'string' } },
  { latitude: { value: 'Quarante trois', type: 'literal', datatype: 'number' } }, // Incorrect value,
  { longitude: { value: '-200', type: 'literal', datatype: 'number' } }, // Another incorrect value,
  { population: { value: '1', type: 'literal', datatype: 'number' } },
];

const expectedKeys = [
  { name: 'name', required: true, datatype: 'string' },
  { name: 'latitude', required: true, datatype: 'number', customValidator: checkLatitudeLongitude },
  { name: 'longitude', required: true, datatype: 'number', customValidator: checkLatitudeLongitude },
  { name: 'population', required: false, datatype: 'number', customValidator: positiveNumber },
];

/**
 * When there is no problem, the webcomponent does not display anything, but can send a success boolean (see console). If the test was not successful, the booleen would be false.
 */
export const Default = await stencilWrapper(<geov-yasgui-data-validation data={dataExample} expectedKeys={expectedKeys}></geov-yasgui-data-validation>);

/**
 * Required data: If the key is not available in the record although it should (required=true), the webcomponent will display this message:
 */
export const missingData = await stencilWrapper(
  <geov-yasgui-data-validation data={dataMissingLatitudeAndLongitudeExample} expectedKeys={expectedKeys}></geov-yasgui-data-validation>,
);
/**
 * Datatype mismatch: if the key is available (!) but the datatype does not match, the webcomponent will display this message:
 */
export const incorrectDatatype = await stencilWrapper(
  <geov-yasgui-data-validation data={dataIncorrectDatatypeLatitudeAndLongitudeExample} expectedKeys={expectedKeys}></geov-yasgui-data-validation>,
);
/**
 * Custom validator: If the values are incorrect according to the predefined customValidator, the webcomponent will return the messages created by the customValidator
 */
export const incorrectValue = await stencilWrapper(
  <geov-yasgui-data-validation data={dataIncorrectValueLatitudeAndLongitudeExample} expectedKeys={expectedKeys}></geov-yasgui-data-validation>,
);
