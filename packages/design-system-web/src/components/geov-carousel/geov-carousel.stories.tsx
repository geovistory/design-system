import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12 } from './images';

export default {
  title: 'Design Components/Carousel',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

export const Carousel = await stencilWrapper(
  <geov-carousel
    style={{ height: '400px', maxWidth: '600px' }}
    images={[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]}
  ></geov-carousel>,
);
