import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';

export default {
  title: 'Design Components/Paginator',
};

export const Paginator = stencilWrapper(
  <geov-paginator
    length={60}
    onPageChanged={e => {
      console.log(e.detail);
    }}
  ></geov-paginator>,
);

export const PaginatorColor = stencilWrapper(
  <geov-paginator
    length={60}
    color="tertiary"
    onPageChanged={e => {
      console.log(e.detail);
    }}
  ></geov-paginator>,
);
