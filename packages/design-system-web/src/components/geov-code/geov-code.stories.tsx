import React from 'react';
import { JSX } from '../..';
import { GeovCode } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Design Components/Code',
  component: GeovCode,
};
const Template = (args: JSX.GeovCode) => <GeovCode {...args}></GeovCode>;

export const CodeHtml = Template.bind({});
const argsHtml: JSX.GeovCode = {
  code: '<div><h1>Hello</h1></div>',
  language: 'html',
};
CodeHtml.args = argsHtml;
export const CodeXml = Template.bind({});
const argsXml: JSX.GeovCode = {
  code: `<foo:mytag>
  <foo:bar hi="you" />
</foo:mytag>`,
  language: 'xml',
};
CodeXml.args = argsXml;

export const CodeCss = Template.bind({});
const argsCss: JSX.GeovCode = {
  code: `pre,
code {
  margin: 0;
  padding: 0;
}`,
  language: 'css',
};
CodeCss.args = argsCss;

export const CodeJson = Template.bind({});
const argsJson: JSX.GeovCode = {
  code: `{
    "foo": 1,
    "bar": "myvalue"
    "baz": [1,2,3]
}`,
  language: 'json',
};
CodeJson.args = argsJson;


export const CodeBash = Template.bind({});
const argsBash: JSX.GeovCode = {
  code: `# install components
npm i @geovistory/design-system-web`,
  language: 'bash',
};
CodeBash.args = argsBash;

export const CodeSparql = Template.bind({});
const argsSparql: JSX.GeovCode = {
  code: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX onto-c: <https://ontome.net/class/>
PREFIX onto-p: <https://ontome.net/property/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?object
WHERE {
  ?subject ?predicate ?object .
}
LIMIT 10`,
  language: 'sparql',
};
CodeSparql.args = argsSparql;

export const CodeNoButton = Template.bind({});
const argsNoButton: JSX.GeovCode = {
  code: `pre,
code {
  margin: 0;
  padding: 0;
}`,
  language: 'css',
  copyButton: false,
};
CodeNoButton.args = argsNoButton;
