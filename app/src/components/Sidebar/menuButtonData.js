import icons from './../../svg';

const menuButtonData = {
  hamburger: {
    icon: {
      on: icons.close,
      off: icons.hamburger
    },
    ariaLabel: {
      on: 'Close Menu',
      off: 'Open Menu'
    }
  },
  taskList: {
    icon: {
      on: icons.checkSolid,
      off: icons.check
    },
    ariaLabel: {
      on: 'Close Tasks',
      off: 'Open Tasks'
    }
  },
  timer: {
    icon: {
      on: icons.timerSolid,
      off: icons.timer
    },
    ariaLabel: {
      on: 'Close Timer',
      off: 'Open Timer'
    }
  }
};

export default menuButtonData;