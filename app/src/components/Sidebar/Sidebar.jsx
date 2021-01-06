import React, { useState } from 'react';
import MenuButton from '../MenuButton';

import menuButtonData from './menuButtonData';

export const Sidebar = ({ widgetsAreOn }) => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <MenuButton
        menuButton={menuButtonData.hamburger}
        isOn={widgetsAreOn.hamburger}
        isMain={true}
        widgetName='hamburger'
        setSidebarVisible={setVisible}
      />
      <div className={visible ? 'Sidebar Sidebar--isVisible' : 'Sidebar Sidebar--isHidden'}>
        <div className='empty-button-space' />
        <div className='menu-button-container'>
          <div className='empty-button-space-mobile' />
          <MenuButton menuButton={menuButtonData.taskList} isOn={widgetsAreOn.taskList} widgetName='taskList' />
          <MenuButton menuButton={menuButtonData.timer} isOn={widgetsAreOn.timer} widgetName='timer' />
          <MenuButton menuButton={menuButtonData.timer} isOn={widgetsAreOn.timer} widgetName='timer' />
          <MenuButton menuButton={menuButtonData.timer} isOn={widgetsAreOn.timer} widgetName='timer' />
          <MenuButton menuButton={menuButtonData.timer} isOn={widgetsAreOn.timer} widgetName='timer' />
          <MenuButton menuButton={menuButtonData.timer} isOn={widgetsAreOn.timer} widgetName='timer' />
          <MenuButton menuButton={menuButtonData.timer} isOn={widgetsAreOn.timer} widgetName='timer' />
          <MenuButton menuButton={menuButtonData.timer} isOn={widgetsAreOn.timer} widgetName='timer' />
        </div>
        <div className='empty-button-space' />
      </div>
    </>
  );
};