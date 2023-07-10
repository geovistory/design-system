import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { defineCustomElement } from '../../../dist/components/geov-property-distri';
defineCustomElement();

export default {
  title: 'Design Components/Toc',
};

export const Toc = stencilWrapper(
  <div>
    <h1 id="welcome">
      Welcome <small>you!</small>
    </h1>
    <geov-toc>
      <h2 id="1-title">1. Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <h2 id="2-title">2. Title this is a very long title, what happens here?</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
      <div>
        <h2>2.1 Title</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
          architecto totam sit tempora! A sunt repellat officiis.
        </p>
        <h3 id="2-1-1-title">2.1.1 Title</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
          architecto totam sit tempora! A sunt repellat officiis.
        </p>
      </div>
      <h2>3. Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio necessitatibus alias, obcaecati unde, molestias ipsam suscipit dolor, ipsum consequuntur ab in aut
        architecto totam sit tempora! A sunt repellat officiis.
      </p>
    </geov-toc>
  </div>,
);
