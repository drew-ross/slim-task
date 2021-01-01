import React, { useEffect, useState } from 'react';

// Delay showing the menu button description in milliseconds
const timeUntilVisible = 600;

export const ButtonHoverMessage = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, timeUntilVisible);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      { visible && (
        <div className='ButtonHoverMessage'>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};