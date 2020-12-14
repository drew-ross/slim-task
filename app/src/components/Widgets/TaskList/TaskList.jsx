import React from 'react';
import { connect } from 'react-redux';

import { Task } from './Task';

const TaskList = props => {
  const { taskList } = props;

  return (
    <section className='Widget TaskList'>
      <h2>Tasks</h2>
      {taskList.length &&
        taskList.map(task => <Task key={task.id} task={task} />)
      }
    </section>
  );
};

const mapStateToProps = state => {
  return {
    taskList: state.taskListReducer
  };
};

const connectedTaskList = connect(mapStateToProps, {})(TaskList);

export { connectedTaskList as TaskList };