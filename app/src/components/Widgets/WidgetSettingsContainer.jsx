import React, { useState } from 'react';

export const WidgetSettingsContainer = ({ children }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="WidgetSettingsContainer">
      <div className="WidgetSettingsContainer--settings">
        {showOptions && children}
      </div>
      <button onClick={handleClick}>Options</button>
    </div>
  );
};