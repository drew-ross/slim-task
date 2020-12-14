export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = (task) => {
  return { type: ADD_TASK, payload: task };
};

export const updateTask = (task) => {
  return { type: UPDATE_TASK, payload: task };
};

export const removeTask = (uuid) => {
  return { type: REMOVE_TASK, payload: uuid };
};