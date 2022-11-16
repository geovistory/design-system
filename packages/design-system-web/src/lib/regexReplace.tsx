/**
 * regexReplace
 * @param inputStr string to be modified
 * @param regex regex as string e.g.: http://(geovistory.org)/(.*)
 * @param replace replace string e.g.: http://dev.geovistory.org/$2
 * @returns modified string
 */
export function regexReplace(inputStr: string, regex?: string, replace?: string) {
  if (regex && replace) {
    const r = new RegExp(regex);
    inputStr = inputStr.replace(r, replace);
  }
  return inputStr;
}
