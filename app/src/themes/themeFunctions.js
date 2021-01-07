import { themes } from './themeDefinitions';

// Theme: name of theme in themes object  |  Selector: background/font
export const getThemeStyle = (theme, selector) => {
  console.log({ [selector]: themes[theme][selector] });
  return { [selector]: themes[theme][selector] };
};