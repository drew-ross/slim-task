import { ADD_TASK, UPDATE_TASK, REMOVE_TASK, SET_TASKS } from '../actions/taskListActions';
import { v4 as uuid } from 'uuid';

const initialState = [];

const createNewTask = (taskName) => {
  const newId = uuid();

  return {
    uuid: newId,
    taskName,
    complete: false
  };
};

export const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      const taskList = action.payload;
      return taskList;
    case ADD_TASK:
      const newTask = createNewTask(action.payload);
      console.log(newTask);
      return [
        ...state,
        newTask
      ];
    case UPDATE_TASK:
      return state.map(task => {
        if (task.uuid === action.payload.uuid) {
          return action.payload;
        } else {
          return task;
        }
      });

    case REMOVE_TASK:
      return state.filter(task => task.uuid !== action.payload);

    default:
      return state;
  };
};