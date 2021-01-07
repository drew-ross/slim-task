import { themes } from './themeDefinitions';

// Theme: name of theme in themes object  |  Selector: background/font
export const getThemeStyle = (theme, selector) => {
  return { [selector]: themes[theme][selector] };
};

export const getThemeList = () => {
  return Object.entries(themes).map(theme => (
    [theme[0], theme[1].backgroundColor]
  ));
};