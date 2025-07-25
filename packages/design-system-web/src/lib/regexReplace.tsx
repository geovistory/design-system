/**
 * regexReplace
 * @param inputStr string to be modified
 * @param regex regex as string e.g.: http://(geovistory.org)/(.*)
 * @param replace replace string e.g.: http://dev.geovistory.org/$2
 * @returns modified string
 */
export function regexReplace(inputStr: string, regex?: string, replace?: string, sparqlEndpoint?: string) {
  if (regex && replace) {
    const r = new RegExp(regex);
    inputStr = inputStr.replace(r, replace);
  }
  if (!sparqlEndpoint) return inputStr;
  else {
    if (inputStr.includes('?')) return inputStr + '&endpoint=' + sparqlEndpoint;
    else return inputStr + '?endpoint=' + sparqlEndpoint;
  }
}
