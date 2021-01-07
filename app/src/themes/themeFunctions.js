import { themes } from './themeDefinitions';

// Theme: name of theme in themes object  |  Selector: background/font
export const getThemeStyle = (theme, selector) => {
  return { [selector]: themes[theme][selector] };
};

export const getThemeList = () => {
  return Object.entries(themes).map(theme => (
    {
      name: theme[0],
      backgroundColor: theme[1].backgroundColor,
      color: theme[1].color
    }
  ));
};