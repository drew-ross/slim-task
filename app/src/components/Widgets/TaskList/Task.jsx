import React from 'react';
import close from '../../../svg/closeDark.svg';

export const Task = ({ task, updateTask, removeTask }) => {

  const { complete, taskName, uuid } = task;
  const className = `Task${complete ? ' Task--completed' : ''}`;
  const handleCheck = () => {
    updateTask({
      ...task,
      complete: !complete
    });
  };

  const handleDelete = () => {
    removeTask(uuid);
  };

  return (
    <div
      className={className}
      aria-label='Task'
    >
      <input
        type='checkbox'
        checked={complete}
        onChange={handleCheck}
      />
      <p>{taskName}</p>
      <button className='btn-delete-task' onClick={handleDelete}>
        <img src={close} alt='delete icon' aria-label='delete task' />
      </button>
    </div>
  );
};