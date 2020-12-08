import React, { useEffect } from 'react';

export const MenuButton = props => {

  const { isMain, widgetName, toggleWidget, isOn, setSidebarVisible } = props;
  const { icon, ariaLabel } = props.menuButton;

  const handleClick = e => {
    if (widgetName && toggleWidget) {
      toggleWidget({ widgetName });
    }
  };

  useEffect(() => {
    if (isMain && setSidebarVisible) {
      setSidebarVisible(isOn);
    }
  }, [isOn]);

  return (
    <button
      className={isMain ? 'MenuButton MenuButton--main' : 'MenuButton'}
      aria-label={isOn ? ariaLabel.on : ariaLabel.off}
      onClick={handleClick}
    >
      {isOn ?
        <img src={icon.on} alt={ariaLabel.on + ' icon'} />
        :
        <img src={icon.off} alt={ariaLabel.off + ' icon'} />
      }
    </button>
  );
};