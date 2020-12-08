export const TOGGLE_WIDGET = 'TOGGLE_WIDGET';

export const toggleWidget = ({ widgetName }) => {
  return { type: TOGGLE_WIDGET, payload: { widgetName } };
};