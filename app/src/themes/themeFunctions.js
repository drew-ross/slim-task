import { themes } from './themeDefinitions';

// Theme: name of theme in themes object  |  Selector: background/font
export const getThemeColor = (theme, selector) => {
  console.log(themes[theme][selector]);
  return themes[theme][selector];
};