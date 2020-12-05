import React, { useEffect } from 'react';

export const MenuButton = props => {

  const { isMain } = props;
  const { icon, ariaLabel } = props.menuButton;
  const [isOn, setIsOn] = props.toggleLogic;

  const handleClick = e => {
    setIsOn(!isOn);
  };

  return (
    <button
      className={isMain ? 'MenuButton MenuButton--main' : 'MenuButton'}
      aria-label={isOn ? ariaLabel.on : ariaLabel.off}
      onClick={handleClick}
    >
      {isOn ? icon.on : icon.off}
    </button>
  );
};