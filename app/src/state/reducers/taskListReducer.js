import { ADD_TASK, UPDATE_TASK, REMOVE_TASK } from '../actions/taskListActions';

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

export const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        action.payload
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