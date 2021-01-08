const generalStyles = {
  light: {
    font: '#f0f0f0',
    border: '#f0f0f0'
  },
  dark: {
    font: '#1f1f1f',
    border: '#808080'
  }
}

const themeDefinition = (backgroundColor, generalStyle) => {
  return {
    generalStyle,
    backgroundColor,
    color: generalStyles[generalStyle].font,
    borderColor: generalStyles[generalStyle].border
  };
};

export const themes = {
  light: themeDefinition('#f0f0f0', 'dark'),
  dark: themeDefinition('#404040', 'light'),
  orange: themeDefinition('#d6754b', 'light')
};