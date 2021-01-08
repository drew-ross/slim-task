import { close, hamburger, check, checkSolid, timer, timerSolid } from './../../svg';

const menuButtonData = {
  hamburger: {
    icon: {
      on: close,
      off: hamburger
    },
    ariaLabel: {
      on: 'Close Menu',
      off: 'Open Menu'
    }
  },
  taskList: {
    icon: {
      on: checkSolid,
      off: check
    },
    ariaLabel: {
      on: 'Close Tasks',
      off: 'Open Tasks'
    }
  },
  timer: {
    icon: {
      on: timerSolid,
      off: timer
    },
    ariaLabel: {
      on: 'Close Timer',
      off: 'Open Timer'
    }
  }
};

export default menuButtonData;