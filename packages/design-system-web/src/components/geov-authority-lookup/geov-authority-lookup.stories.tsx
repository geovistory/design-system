import { h } from '@stencil/core';
import type { Meta } from '@storybook/html';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';

const meta: Meta = {
  title: 'Data Components/Authority Lookup',
  argTypes: {
    apis: {
      options: ['gnd', 'idref', 'wikidata'],
      control: 'check',
    },
    types: {
      options: ['All', 'Person', 'Place', 'Group'],
      control: 'check',
    },
    nbColMax: {
      control: { type: 'range', min: 1, max: 3, step: 1 },
    },
  },
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};
export default meta;

export const Basic = await stencilWrapper(
  <geov-authority-lookup
    apis={['geovistory', 'gnd', 'idref', 'wikidata']}
    types={['All', 'Person', 'Place', 'Group']}
    nbOccurencesMax={5}
    displaySelectBtn={true}
    displayOpenBtn={true}
    displayCopyBtn={false}
    nbColMax={2}
    onSelected={e => alert('Selected URI: ' + e.detail.uri)}
  ></geov-authority-lookup>,
);

/**
 * Define the max. number of columns used to display the search results. (Here: 1)
 */
export const NumberOfColumns = await stencilWrapper(<geov-authority-lookup nbColMax={1}></geov-authority-lookup>);
/**
 * Define the max. number of items in the list of search results. (Here: 3)
 */
export const NumberOfSearchResults = await stencilWrapper(<geov-authority-lookup nbOccurencesMax={3}></geov-authority-lookup>);
/**
 * Enable/disable specific authority files (APIs). (Here: only IdRef)
 */
export const CustomizeSearchedApis = await stencilWrapper(<geov-authority-lookup apis={['idref']} nbColMax={1}></geov-authority-lookup>);
/**
 * Enable/disable action buttons on search results. (Here: enable all buttons)
 *
 * The buttons have this behavior:
 *
 * - **Select**: Emits the URI of the selected entity as a DOM event.
 * - **Copy**: Copies the URI of the selected entity to the clipboard.
 * - **Open**: Opens the URI of the selected entity in a new browser tab.
 */
export const CustomizeButtons = await stencilWrapper(<geov-authority-lookup displayCopyBtn={true} displayOpenBtn={true} displaySelectBtn={true}></geov-authority-lookup>);
/**
 * Set the initial search string and type/class. (Here: Johannes Kepler, Person)
 */
export const InitializeSearch = await stencilWrapper(<geov-authority-lookup initSearch={'Johannes Kepler'} initSearchType={'Person'}></geov-authority-lookup>);
