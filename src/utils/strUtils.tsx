export const normalizeDiacritics = (str: string) =>
  str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replaceAll('ł', 'l');

export const capitalize = (str: string) => str[0].toUpperCase() + str.substring(1).toLowerCase();

export const getItemPath = (str: string) => {
  return str.toLowerCase().replaceAll(' ', '-');
};
