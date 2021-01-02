import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTask, updateTask, removeTask, toggleShowCompleted } from '../../../state/actions/taskListActions';

import { Task } from './Task';

const TaskList = props => {
  const {
    taskList,
    updateTask,
    removeTask,
    addTask,
    showCompleted,
    toggleShowCompleted
  } = props;
  const [inputValue, setInputValue] = useState('');

  const handleInputChanges = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue('');
  };

  const handleShowCompleted = () => {
    toggleShowCompleted();
  };

  return (
    <section className='Widget TaskList'>
      <h2>Tasks</h2>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor='input-new-task'
          className='label--hidden'
        >
          New Task
        </label>
        <input
          id='input-new-task'
          placeholder='New Task'
          value={inputValue}
          onChange={handleInputChanges}
        />
        <button>Add</button>
      </form>
      <input
        id='show-completed'
        type='checkbox'
        checked={showCompleted}
        onChange={handleShowCompleted}
      />
      <label htmlFor='show-completed'>Show Completed Tasks</label>
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