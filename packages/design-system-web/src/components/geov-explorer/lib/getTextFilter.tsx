export const getTextFilter = (s: string) => s.trim().replace('*', ' ').split(' ').join('*');
