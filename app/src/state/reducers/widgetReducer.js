import { TOGGLE_WIDGET } from '../actions/widgetActions';

const initialState = {
  isOn: {
    hamburger: false,
    taskList: false,
    timer: false,
  }
};

export const widgetReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_WIDGET:
			return { 
				...state, 
				isOn: {
          ...state.isOn,
          [action.payload.widgetName]: action.payload.isOn
        }
			};
		default:
			return state;
	};
};