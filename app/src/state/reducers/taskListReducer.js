import { v4 as uuid } from 'uuid';
import {
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  SET_TASKLIST_STATE,
  TOGGLE_SHOW_COMPLETED,
  SET_TASKLIST_THEME
} from '../actions/taskListActions';

const initialState = {
  theme: 'light',
  showCompleted: false,
  taskList: []
};

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
    case SET_TASKLIST_STATE:
      const taskListState = action.payload;
      return taskListState;

    case ADD_TASK:
      const newTask = createNewTask(action.payload);
      return {
        ...state,
        taskList: [
          ...state.taskList,
          newTask
        ]
      };

    case UPDATE_TASK:
      return {
        ...state,
        taskList: state.taskList.map(task => {
          if (task.uuid === action.payload.uuid) {
            return action.payload;
          } else {
            return task;
          }
        })
      };

    case REMOVE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(task => task.uuid !== action.payload)
      };

    case TOGGLE_SHOW_COMPLETED:
      return {
        ...state,
        showCompleted: !state.showCompleted
      };

    case SET_TASKLIST_THEME: {
      return {
        ...state,
        theme: action.payload
      };
    }

    default:
      return state;
  };
};