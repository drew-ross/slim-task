import { themes } from './themeDefinitions';

// Theme: name of theme in themes object  |  Selector: background/font
export const getThemeStyle = (theme, selector) => {
  return { [selector]: themes[theme][selector] };
};