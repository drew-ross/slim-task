import React, { useState } from 'react';
import MenuButton from '../MenuButton';

const menuButtons = {
  hamburger: {
    icon: {
      on: 'X',
      off: '☰'
    },
    ariaLabel: {
      on: 'Close Menu',
      off: 'Open Menu'
    }
  }
};

export const Sidebar = props => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <MenuButton menuButton={menuButtons.hamburger} toggleLogic={[visible, setVisible]} isMain={true} />
      <div className={visible ? 'Sidebar isVisible' : 'Sidebar isHidden'}>

      </div>
    </>
  );
};