import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTask, updateTask, removeTask, toggleShowCompleted } from '../../../state/actions/taskListActions';

import { Task } from './Task';
import { AddTaskInput } from './AddTaskInput';
import { WidgetSettingsContainer } from '../WidgetSettingsContainer';

const TaskList = props => {
  const {
    taskList,
    updateTask,
    removeTask,
    addTask,
    showCompleted,
    toggleShowCompleted
  } = props;

  const handleShowCompleted = () => {
    toggleShowCompleted();
  };

  return (
    <section className='Widget TaskList'>
      <h2>Tasks</h2>
      <WidgetSettingsContainer>
        <input
          id='input-show-completed'
          type='checkbox'
          checked={showCompleted}
          onChange={handleShowCompleted}
        />
        <label htmlFor='input-show-completed'>Show Completed Tasks</label>
      </WidgetSettingsContainer>
      <AddTaskInput addTask={addTask} />
      {taskList && (
        <>
          <div className="open-tasks">
            {taskList
              .filter(task => !task.complete)
              .map(task => (
                <Task
                  key={task.uuid}
                  task={task}
                  updateTask={updateTask}
                  removeTask={removeTask}
                />))}
          </div>
          <div className="closed-tasks">
            {showCompleted && taskList
              .filter(task => task.complete)
              .map(task => (
                <Task
                  key={task.uuid}
                  task={task}
                  updateTask={updateTask}
                  removeTask={removeTask}
                />))}
          </div>
        </>
      )}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    taskList: state.taskListReducer.taskList,
    showCompleted: state.taskListReducer.showCompleted
  };
};

const connectedTaskList = connect(mapStateToProps, { addTask, updateTask, removeTask, toggleShowCompleted })(TaskList);

export { connectedTaskList as TaskList };