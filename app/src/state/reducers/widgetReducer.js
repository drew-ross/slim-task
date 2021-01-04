import { TOGGLE_WIDGET, SET_WIDGET_STATE } from '../actions/widgetActions';

const initialState = {
	isOn: {
		hamburger: false,
		taskList: false,
		timer: false,
	}
};

export const widgetReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WIDGET_STATE:
			return action.payload;
			
		case TOGGLE_WIDGET:
			const { widgetName } = action.payload;
			return {
				...state,
				isOn: {
					...state.isOn,
					[widgetName]: !state.isOn[widgetName]
				}
			};

		default:
			return state;
	};
};