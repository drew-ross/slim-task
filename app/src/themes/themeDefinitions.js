const colorFontDark = '#1f1f1f';
const colorFontLight = '#f0f0f0';

const themeDefinition = (fontColor, backgroundColor) => {
  return {
    fontColor,
    backgroundColor
  };
};

export const themes = {
  light: themeDefinition(colorFontDark, colorFontLight),
  dark: themeDefinition(colorFontLight, colorFontDark)
};