import { combineReducers, createStore } from 'redux';

import { widgetReducer } from './reducers/widgetReducer';

const rootReducer = combineReducers({
  widgetReducer,
});

const store = createStore(rootReducer);

export default store;