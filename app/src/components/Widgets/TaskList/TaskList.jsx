import React from 'react';
import { connect } from 'react-redux';

import { addTask, updateTask, removeTask, toggleShowCompleted, setTaskListTheme } from '../../../state/actions/taskListActions';
import { getThemeStyle } from '../../../themes/themeFunctions';

import { Task } from './Task';
import { AddTaskInput } from './AddTaskInput';
import { WidgetSettingsContainer } from '../WidgetSettingsContainer';
import ThemeSelector from '../../ThemeSelector';

const TaskList = props => {
  const {
    taskList,
    updateTask,
    removeTask,
    addTask,
    showCompleted,
    toggleShowCompleted,
    theme,
    setTaskListTheme
  } = props;

  const handleShowCompleted = () => {
    toggleShowCompleted();
  };

  return (
    <section
      className='Widget TaskList'
      style={getThemeStyle(theme, 'backgroundColor')}
    >
      <h2 style={getThemeStyle(theme, 'color')}>Tasks</h2>
      <WidgetSettingsContainer theme={theme}>
        <div>
          <ThemeSelector setTheme={setTaskListTheme} currentTheme={theme} />
          <input
            id='input-show-completed'
            type='checkbox'
            checked={showCompleted}
            onChange={handleShowCompleted}
          />
          <label htmlFor='input-show-completed'>Show Completed Tasks</label>
        </div>
      </WidgetSettingsContainer>
      <AddTaskInput addTask={addTask} theme={theme} />
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
    showCompleted: state.taskListReducer.showCompleted,
    theme: state.taskListReducer.theme
  };
};

const connectedTaskList = connect(mapStateToProps,
  {
    addTask,
    updateTask,
    removeTask,
    toggleShowCompleted,
    setTaskListTheme
  })(TaskList);

export { connectedTaskList as TaskList };