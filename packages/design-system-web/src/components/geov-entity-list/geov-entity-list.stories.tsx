import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Components/Explorer/EntityList',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const EntityList = stencilWrapper(
  <geov-entity-list
    items={[
      { entityLabel: 'Maria Zimmermann', classLabel: 'Person', entityUri: 'http://geovistory.org/resource/i90000', classUri: 'https://ontome.net/ontology/c21' },
      { entityLabel: 'Max Zimmermann', classLabel: 'Person', entityUri: 'http://geovistory.org/resource/i90000', classUri: 'https://ontome.net/ontology/c21' },
    ]}
  ></geov-entity-list>,
);

export const EntityListLoading = stencilWrapper(<geov-entity-list loading={true} defaultPageSize={10}></geov-entity-list>);

export const EntityListUrlReplace = stencilWrapper(
  <geov-entity-list
    items={[
      { entityLabel: 'Maria Zimmermann', classLabel: 'Person', entityUri: 'http://geovistory.org/resource/i90000', classUri: 'https://ontome.net/ontology/c21' },
      { entityLabel: 'Max Zimmermann', classLabel: 'Person', entityUri: 'http://geovistory.org/resource/i90000', classUri: 'https://ontome.net/ontology/c21' },
    ]}
    uriRegex="(http://geovistory.org/resource/)(.*)"
    uriReplace="http://dev.geovistory.org/resource/$2?p=123"
  ></geov-entity-list>,
);
