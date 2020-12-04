import React, { useEffect } from 'react';

export const MenuButton = props => {

  const { icon, ariaLabel, isOn, setIsOn } = props;

  const handleClick = e => {
    setIsOn(!isOn);
  };

  return (
    <button
      className='MenuButton'
      aria-label={isOn ? ariaLabel.on : ariaLabel.off}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};