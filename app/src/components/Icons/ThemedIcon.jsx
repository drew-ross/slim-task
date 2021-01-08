import React from 'react';

import { getIconStyle } from '../../themes/themeFunctions';

export const ThemedIcon = props => {
  const { theme, toggled, darkIcon, lightIcon, darkOnIcon, lightOnIcon, altLabel } = props;

  const icon = () => {
    if (getIconStyle(theme) === 'light') {
      if (toggled && lightOnIcon) {
        return lightOnIcon;
      } else {
        return lightIcon;
      }
    } else if (getIconStyle(theme) === 'dark') {
      if (toggled && darkOnIcon) {
        return darkOnIcon;
      } else {
        return darkIcon;
      }
    }
  };

  const altText = () => {
    if (toggled === undefined) {
      return `${altLabel} icon`;
    } else if (toggled) {
      return `${altLabel} off icon`;
    } else {
      return `${altLabel} on icon`;
    }
  };
  
  return <img src={icon} alt={altText}/>
};