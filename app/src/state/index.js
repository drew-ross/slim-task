import { combineReducers, createStore } from 'redux';

import { widgetReducer } from './reducers/widgetReducer';
import { taskListReducer } from './reducers/taskListReducer';

const rootReducer = combineReducers({
  widgetReducer,
  taskListReducer,
});

const store = createStore(rootReducer);

export default store;