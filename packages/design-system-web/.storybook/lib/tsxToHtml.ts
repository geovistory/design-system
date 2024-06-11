import { VNode } from '@stencil/core';
import { format } from 'prettier';
import pluginHtml from 'prettier/plugins/html.mjs';
import pluginBabel from 'prettier/plugins/babel.mjs';
import pluginEStree from 'prettier/plugins/estree.mjs';
import pluginTypescript from 'prettier/plugins/typescript.mjs';

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
export async function tsxToHTML(tsxSnippet: VNode): Promise<string> {
  // Store complex elements
  const complexElements: ComplexElements = {};
  global.listFunctions = {};

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
            let value = $attrs$[key];
            // Handle objects
            if (typeof value === 'object') {
              // if value is a Set, convert it to an array to stringify propertly
              // see: https://stackoverflow.com/a/31190928
              if (value instanceof Set) value = [...value];

              selfId = id;
              // Put key and value in the complexElements
              complexElements[id] = {
                ...complexElements[id],
                props: [...(complexElements[id]?.props ?? []), { key, value: JSON.stringify(value, replacer, 2).replace(/</g, '&lt;') }],
              };
              return false;
            }
            // Handle functions
            if (typeof value === 'function') {
              selfId = id;
              // Put key and value in the complexElements
              complexElements[id] = {
                ...complexElements[id],
                functions: [...(complexElements[id]?.functions ?? []), { key, value }],
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
    if ($tag$ == 'br' || $tag$ == 'img') return `<${$tag$}${selfId ? ` id="el-${selfId}" ` : ''}${attributeString} .>${childHTML}`;
    return `<${$tag$}${selfId ? ` id="el-${selfId}" ` : ''}${attributeString}>${childHTML}</${$tag$}>`;
  };

  let htmlString = convertToHTML(tsxSnippet);
  htmlString = initWrapper(htmlString, complexElements, global.listFunctions);
  const formatted = await format(htmlString, {
    plugins: [pluginHtml, pluginBabel, pluginEStree, pluginTypescript],
    parser: 'html',
    singleQuote: true,
    singleAttributePerLine: true,
  });
  return formatted
    .replace(/&frasl;/g, '/')
    .replace(/&lt;/g, '<')
    .replace(/&Prime;/g, '/"');
}

// Convert camelCase to dash-case
function camelToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function replacer(_key: string, value: any): any {
  if (typeof value === 'function') {
    const functionKey = value.name;
    global.listFunctions[functionKey] = value.toString();
    return functionKey; // Return a placeholder or a key to identify the function
  }
  return value;
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
function initWrapper(htmlString: string, complexElements: ComplexElements, listFunctions) {
  const listKeysFunctions = Object.keys(listFunctions);
  const regex = new RegExp(`['"](${listKeysFunctions.join('|')})['"]`, 'g');
  if (Object.keys(complexElements).length === 0) return htmlString;

  return `
<body onload="init()">

  ${htmlString}

  <script>
${listKeysFunctions.map(key => `const ${key} = ${listFunctions[key]};`).join('\n\n')}

function init() {
      ${Object.keys(complexElements)
        .map(
          key => `var el${key} = document.getElementById('el-${key}');
      ${
        complexElements[key]?.props
          ? `// Add props
      ${complexElements[key].props.map(prop => `el${key}['${prop.key}'] = ${prop.value}`).join(`;
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
        .join('')
        .replace(regex, '$1')}
  </script>
</body>
`;
}
