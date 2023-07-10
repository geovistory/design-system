import { h } from '@stencil/core';
import { stencilWrapper } from '../../helpers/stencilWrapper';
import { defineCustomElement } from '../../../dist/components/geov-code';
defineCustomElement();
export default {
  title: 'Design Components/Code',
};

const codeHtml = '<div><h1>Hello</h1></div>';
export const CodeHtml = stencilWrapper(<geov-code code={codeHtml} language="html"></geov-code>);

export const CodeXml = stencilWrapper(
  <geov-code
    code={
      <foo:mytag>
        <foo:bar hi="you" />
      </foo:mytag>
    }
    language="xml"
  ></geov-code>,
);

export const CodeCss = stencilWrapper(
  <geov-code
    code="pre,
code {
  margin: 0;
  padding: 0;
}"
    language="css"
  ></geov-code>,
);

export const CodeJson = stencilWrapper(<geov-code code="{'foo': 1, 'bar': 'myvalue', 'baz': [1,2,3]}" language="json"></geov-code>);

export const CodeBash = stencilWrapper(
  <geov-code
    code="# install components
npm i @geovistory/design-system-web"
    language="bash"
  ></geov-code>,
);

/* export const CodeSparql = stencilWrapper(
  <geov-code
    code="PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX owl: <http://www.w3.org/2002/07/owl#> PREFIX xml: <http://www.w3.org/XML/1998/namespace> PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> PREFIX geo: <http://www.opengis.net/ont/geosparql#> PREFIX time: <http://www.w3.org/2006/time#> PREFIX onto-c: <https://ontome.net/class/> PREFIX onto-p: <https://ontome.net/property/> PREFIX geov: <http://geovistory.org/resource/> SELECT ?subject ?predicate ?object WHERE { ?subject ?predicate ?object . } LIMIT 10"
    language="sparql"
  ></geov-code>
); */

export const CodeNoButton = stencilWrapper(
  <geov-code
    code="pre,
code {
  margin: 0;
  padding: 0;
}"
    language="css"
    copyButton={false}
  ></geov-code>,
);
