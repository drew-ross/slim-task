export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_TASKLIST_STATE = 'SET_TASKLIST_STATE';
export const TOGGLE_SHOW_COMPLETED = 'TOGGLE_SHOW_COMPLETED';
export const SET_TASKLIST_THEME = 'SET_TASKLIST_THEME';

export const setTaskListState = (taskListState) => {
  return { type: SET_TASKLIST_STATE, payload: taskListState };
};

export const addTask = (taskName) => {
  return { type: ADD_TASK, payload: taskName };
};

export const updateTask = (task) => {
  return { type: UPDATE_TASK, payload: task };
};

export const removeTask = (uuid) => {
  return { type: REMOVE_TASK, payload: uuid };
};

export const toggleShowCompleted = () => {
  return { type: TOGGLE_SHOW_COMPLETED };
};

export const setTaskListTheme = (theme) => {
  console.log(theme);
  return { type: SET_TASKLIST_THEME, payload: theme };
};