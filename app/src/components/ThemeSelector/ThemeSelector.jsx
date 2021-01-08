import React from 'react';

import { getThemeList } from '../../themes/themeFunctions';

export const ThemeSelector = props => {
  const { setTheme, currentTheme } = props;

  const handleOnChange = e => {
    setTheme(e.target.value);
  };

  return (
    <form>
      <label htmlFor='select-theme'>Theme: </label>
      <select
        id='select-theme'
        onChange={handleOnChange}
      >
        {getThemeList().map((theme, key) =>
          <ThemeOption key={key} theme={theme} currentTheme={currentTheme} />
        )}
      </select>
    </form>
  );
};

const ThemeOption = props => {
  const { theme, currentTheme } = props;

  return (
    <option
      value={theme.name}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      selected={theme.name === currentTheme}
    >
      {theme.name.toUpperCase()}
    </option>
  );
};