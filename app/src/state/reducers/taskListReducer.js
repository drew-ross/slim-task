import { ADD_TASK, UPDATE_TASK, REMOVE_TASK, SET_TASKLIST_STATE} from '../actions/taskListActions';
import { v4 as uuid } from 'uuid';

const initialState = {
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
      console.log(newTask);
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

    default:
      return state;
  };
};