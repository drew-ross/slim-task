export const TOGGLE_WIDGET = 'TOGGLE_WIDGET';
export const SET_WIDGET_STATE = 'SET_WIDGET_STATE';

export const setWidgetState = (widgetState) => {
  return { type: SET_WIDGET_STATE, payload: widgetState };
};

export const toggleWidget = ({ widgetName }) => {
  return { type: TOGGLE_WIDGET, payload: { widgetName } };
};