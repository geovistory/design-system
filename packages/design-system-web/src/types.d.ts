declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.md?raw';

declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChartTypeRegistry } from 'chart.js';
declare module 'chart.js' {
  interface ChartTypeRegistry {
    customBar: ChartTypeRegistry['customBar'];
  }
}
