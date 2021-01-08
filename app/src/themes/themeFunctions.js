import { themes } from './themeDefinitions';

// Theme: name of theme in themes object
// Selectors: a list of selector strings that match key names in themeDefinitions
export const getThemeStyle = (theme, ...selectors) => {
  const styleObj = {};
  selectors.forEach(selector => {
    styleObj[selector] = themes[theme][selector];
  });
  return styleObj;
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

export const getGeneralStyle = theme => {
  return themes[theme].generalStyle;
};