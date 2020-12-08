import { TOGGLE_WIDGET } from '../actions/widgetActions';

const initialState = {
  hamburger: {
    isOn: false,
  },
  taskList: {
    isOn: false,
  },
  timer: {
    isOn: false
  }
};

export const widgetReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_WIDGET:
      console.log(state[action.payload.widgetName])
			return { 
				...state, 
				[action.payload.widgetName]: {
          ...state[action.payload.widgetName],
          isOn: action.payload.isOn
        }
			};
		default:
			return state;
	};
};