/**
 * Convert a string using dash-case to PascalCase
 * @param str the string to convert to PascalCase
 * @returns the PascalCased string
 */

const dashToPascalCase = str =>
  str
    .toLowerCase()
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');

module.exports = dashToPascalCase;
