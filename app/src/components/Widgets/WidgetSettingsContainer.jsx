import React, { useState } from 'react';

export const WidgetSettingsContainer = ({ children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const className = `WidgetSettingsContainer${showOptions ? ' open' : ''}`

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <section className={className}>
      <div className='WidgetSettingsContainer--settings'>
        {showOptions && children}
      </div>
      <div className='WidgetSettingsContainer--btn-container'>
        <button onClick={handleClick}>Options</button>
      </div>
    </section>
  );
};