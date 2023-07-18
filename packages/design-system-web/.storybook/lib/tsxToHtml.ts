import { VNode } from '@stencil/core';
import { format } from 'prettier';
import pluginXML from '@prettier/plugin-xml';

// Interface for a complex property
interface ComplexProperty {
  key: string;
  value: any;
}

// Interface for a complex element
interface ComplexElement {
  props: ComplexProperty[];
  functions: ComplexProperty[];
}

// Interface for storing complex elements
interface ComplexElements {
  [key: number]: ComplexElement;
}

// Convert TSX to HTML string
export function tsxToHTML(tsxSnippet: VNode): string {
  // Store complex elements
  const complexElements: ComplexElements = {};

  // Id serial number
  let id = 1;

  // Recursive function to convert VNode to HTML string
  const convertToHTML = (vnode: VNode): string => {
    if (typeof vnode === 'string') {
      return vnode;
    }

    const { $tag$, $attrs$, $children$, $text$ } = vnode;

    let selfId;

    // if text, replace < with &lt; and return it
    if ($text$) return $text$.replace(/</g, '&lt;');

    let attributeString = '';
    if ($attrs$)
      attributeString =
        ' ' +
        Object.keys($attrs$)
          .filter(key => {
            const value = $attrs$[key];
            // Handle complex types and functions
            if (typeof value === 'object' || typeof value === 'function') {
              selfId = id;
              const slug: keyof ComplexElement = typeof value === 'object' ? 'props' : 'functions';

              // Put key and value in the complexElements
              complexElements[id] = {
                ...complexElements[id],
                [slug]: [...(complexElements[id]?.[slug] ?? []), { key, value }],
              };
              return false;
            }

            return true;
          })
          .map(key => {
            // replace < with &lt; in attribute values to avoid formatting error
            let value = $attrs$[key].toString().replace(/</g, '&lt;');

            // replace " with &Prime; in attribute values to avoid formatting error
            value = value.replace(/"/g, '&Prime;');

            // replace / with &frasl; in attribute values to avoid formatting error
            value = value.replace(/\//g, '&frasl;');

            const attr = camelToDash(key) + '="' + value + '"';
            return attr;
          })
          .join(' ');

    if (selfId) id++;

    let childHTML = '';
    if ($children$) childHTML = $children$.map(child => convertToHTML(child)).join('');

    return `<${$tag$}${selfId ? ` id="el-${selfId}" ` : ''}${attributeString}>${childHTML}</${$tag$}>`;
  };

  let htmlString = convertToHTML(tsxSnippet);
  htmlString = initWrapper(htmlString, complexElements);
  let returnvalue: string;
  format(htmlString, { plugins: [pluginXML], parser: 'xml', singleQuote: true, singleAttributePerLine: true }).then(v => {
    returnvalue = v.replace(/&frasl;/g, '/').replace(/&lt;/g, '<');
  });
  return returnvalue;
}

// Convert camelCase to dash-case
function camelToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Remove "on" prefix and convert the next character to lowercase
 * e.g.: onMyEvent -> myEvent
 *
 * @param str
 * @returns string
 */
function convertEventHandlerName(eventName: string) {
  return eventName.replace(/^on(.)(.*)$/, (_, firstChar, rest) => firstChar.toLowerCase() + rest);
}

/**
 * Complex types (functions, objects) can't be passed to the component
 * via attributes. In case there are such complex elements, this function
 * creates a wrapper with the nessecary HTML and JavaScript to pass in
 * complex types.
 *
 * @param htmlString
 * @param complexElements
 * @returns
 */
function initWrapper(htmlString: string, complexElements: ComplexElements) {
  if (Object.keys(complexElements).length === 0) return htmlString;

  return `
<body onload="init()">

  ${htmlString}

  <script>
    function init() {
      ${Object.keys(complexElements)
        .map(
          key => `var el${key} = document.getElementById('el-${key}');
      ${
        complexElements[key]?.props
          ? `// Add props
      ${complexElements[key].props.map(prop => `el${key}['${prop.key}'] = ${JSON.stringify(prop.value)}`).join(`;
      `)};`
          : ''
      }${
            complexElements[key]?.functions
              ? `
      // Add event listeners
      ${complexElements[key].functions.map(prop => `el${key}.addEventListener('${convertEventHandlerName(prop.key)}', ${prop.value}`)});`
              : ''
          }`,
        )
        .join('')}
    }
  </script>
</body>
`;
}
