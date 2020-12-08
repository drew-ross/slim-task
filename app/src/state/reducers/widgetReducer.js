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