import React, { useState } from 'react';

export const Sidebar = props => {

  const [visible, setVisible] = useState(false);

  return (
    <div className={visible ? 'Sidebar isVisible' : 'Sidebar isHidden'}>

    </div>
  );
};