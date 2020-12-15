import { ADD_TASK, UPDATE_TASK, REMOVE_TASK } from '../actions/taskListActions';
import { v4 as uuid } from 'uuid';

const initialState = [
  {
    uuid: 1,
    taskName: 'Dummy Task',
    complete: true,
  },
  {
    uuid: 2,
    taskName: 'Another Dummy Task',
    complete: false,
  }
];

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
    case ADD_TASK:
      const newTask = createNewTask(action.payload);
      console.log(newTask)
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