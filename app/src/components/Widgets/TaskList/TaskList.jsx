import React from 'react';
import { connect } from 'react-redux';

import { addTask, updateTask, removeTask } from '../../../state/actions/taskListActions';

import { Task } from './Task';

const TaskList = props => {
  const { taskList, updateTask, removeTask } = props;

  return (
    <section className='Widget TaskList'>
      <h2>Tasks</h2>
      {taskList.length &&
        taskList.map(task => (
          <Task
            key={task.id}
            task={task}
            updateTask={updateTask}
            removeTask={removeTask}
          />
        ))
      }
    </section>
  );
};

const mapStateToProps = state => {
  return {
    taskList: state.taskListReducer
  };
};

const connectedTaskList = connect(mapStateToProps, { addTask, updateTask, removeTask })(TaskList);

export { connectedTaskList as TaskList };