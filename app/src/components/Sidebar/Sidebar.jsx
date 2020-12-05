import React, { useState } from 'react';
import MenuButton from '../MenuButton';

import menuButtonData from './menuButtonData';

export const Sidebar = props => {

  const [visible, setVisible] = useState(false);
  const [testToggle, setTestToggle] = useState(false);

  return (
    <>
      <MenuButton menuButton={menuButtonData.hamburger} toggleLogic={[visible, setVisible]} isMain={true} />
      <div className={visible ? 'Sidebar Sidebar--isVisible' : 'Sidebar Sidebar--isHidden'}>
        <div className='empty-button-space' />
        <MenuButton menuButton={menuButtonData.taskList} toggleLogic={[testToggle, setTestToggle]} />
        <MenuButton menuButton={menuButtonData.timer} toggleLogic={[testToggle, setTestToggle]} />
      </div>
    </>
  );
};