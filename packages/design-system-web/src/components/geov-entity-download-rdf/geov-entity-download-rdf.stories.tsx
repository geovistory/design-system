import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
import { heartCircle } from 'ionicons/icons';
export default {
  title: 'Data Components/Entity/Download RDF',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};
export const EntityDownloadRdf = await stencilWrapper(<geov-entity-download-rdf entityId="i785518" color="primary" expand="block" fill="outline" buttonLabel="Download RDF" />);
/**
 * You can use an another ion-icon if you want. More details in [Design/Ion Icons](?path=/story/design-ion-icons--ion-icons) then use in buttonIcon={heartCircle} for example below.
 */
export const EntityDownloadRdf2 = await stencilWrapper(
  <geov-entity-download-rdf entityId="i785518" color="warning" fill="outline" buttonLabel="Download" buttonIcon={heartCircle}></geov-entity-download-rdf>,
);
