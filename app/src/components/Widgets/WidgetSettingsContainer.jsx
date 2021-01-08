import React, { useState, useRef } from 'react';

import { gear, gearSolid, gearDark, gearSolidDark } from './../../svg';

import { getThemeStyle } from '../../themes/themeFunctions';
import { ThemedIcon } from '../Icon';

export const WidgetSettingsContainer = ({ theme, children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const className = `WidgetSettingsContainer${showOptions ? ' open' : ''}`;
  const buttonRef = useRef();

  const handleClick = () => {
    setShowOptions(!showOptions);
    buttonRef.current.blur();
  };

  return (
    <section
      className={className}
      style={getThemeStyle(theme, 'color')}
    >
      <div className='WidgetSettingsContainer--settings'>
        {showOptions && children}
      </div>
      <div className='WidgetSettingsContainer--btn-container'>
        <button
          className={`btn-${showOptions ? 'on' : 'off'}`}
          onClick={handleClick}
          aria-label={`${showOptions ? 'close' : 'open'} settings`}
          ref={buttonRef}
        >
          <ThemedIcon
            theme={theme}
            toggled={showOptions}
            darkIcon={gearDark}
            darkOnIcon={gearSolidDark}
            lightIcon={gear}
            lightOnIcon={gearSolid}
          />
        </button>
      </div>
    </section>
  );
};