/**
 * Transforms a string into a jena-lucene search string
 * @param s search string entered by user
 * @returns search string usable for lucene text search
 */
export const getTextFilter = (s: string) => s.trim().replace('*', ' ').split(' ').join('*');
