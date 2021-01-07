import React from 'react';

import { getThemeList } from '../../themes/themeFunctions';

export const ThemeSelector = props => {
  const { changeTheme } = props;

  return (
    <form>
      <label htmlFor='select-theme'>Theme: </label>
      <select
        id='select-theme'
        onChange={changeTheme}
      >
        {getThemeList().map(theme => <ThemeOption theme={theme} />)}
      </select>
    </form>
  );
};

const ThemeOption = props => {
  const { theme } = props;

  return (
    <option
      value={theme.name}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      {theme.name.toUpperCase()}
    </option>
  );
};