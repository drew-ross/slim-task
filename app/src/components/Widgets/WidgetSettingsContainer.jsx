import React, { useState } from 'react';

import { getThemeStyle } from '../../themes/themeFunctions';

export const WidgetSettingsContainer = ({ theme, children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const className = `WidgetSettingsContainer${showOptions ? ' open' : ''}`;

  const handleClick = () => {
    setShowOptions(!showOptions);
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
        <button onClick={handleClick}>Options</button>
      </div>
    </section>
  );
};