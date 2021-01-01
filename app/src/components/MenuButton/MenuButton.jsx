import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { toggleWidget } from '../../state/actions/widgetActions';
import { ButtonHoverMessage } from './ButtonHoverMessage';

export const MenuButton = props => {
  const { isMain, widgetName, toggleWidget, isOn, setSidebarVisible } = props;
  const { icon, ariaLabel } = props.menuButton;
  const thisButton = useRef();
  const [hoverMessageVisible, setHoverMessageVisible] = useState(false);

  const handleClick = e => {
    if (widgetName && toggleWidget) {
      toggleWidget({ widgetName });
    }
    thisButton.current.blur();
  };

  // toggle sidebar when the main menu button is toggled
  useEffect(() => {
    if (isMain && setSidebarVisible) {
      setSidebarVisible(isOn);
    }
  }, [isOn, isMain, setSidebarVisible]);

  return (
    <div className={isMain ? 'MenuButton MenuButton--main' : 'MenuButton'}>
      <button
        aria-label={isOn ? ariaLabel.on : ariaLabel.off}
        ref={thisButton}
        onClick={handleClick}
        onMouseEnter={() => setHoverMessageVisible(true)}
        onFocus={() => setHoverMessageVisible(true)}
        onMouseLeave={() => setHoverMessageVisible(false)}
        onBlur={() => setHoverMessageVisible(false)}
      >
        {isOn ?
          <img src={icon.on} alt={ariaLabel.on + ' icon'} />
          :
          <img src={icon.off} alt={ariaLabel.off + ' icon'} />
        }
      </button>
      {hoverMessageVisible &&
        (<ButtonHoverMessage message={isOn ? ariaLabel.on : ariaLabel.off} />)
      }
    </div>
  );
};

const ConnectedMenuButton = connect(null, { toggleWidget })(MenuButton);

export { ConnectedMenuButton };