export const TOGGLE_WIDGET = 'TOGGLE_WIDGET';

export const toggleWidget = ({ widgetName, isOn }) => {
  return { type: TOGGLE_WIDGET, payload: { widgetName, isOn } };
};