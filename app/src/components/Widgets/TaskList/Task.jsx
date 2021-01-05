import React from 'react';
import close from '../../../svg/closeDark.svg';

// Number of characters at which font gets smaller
const stringLengthThreshold = 50;
const largeFontSize = '2rem';
const smallFontSize = '1.6rem';

export const Task = ({ task, updateTask, removeTask }) => {

  const { complete, taskName, uuid } = task;
  const className = `Task${complete ? ' Task--completed' : ''}`;
  
  const fontSize = () => (taskName.length >= stringLengthThreshold ? smallFontSize : largeFontSize);
  
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
      <p style={{fontSize: fontSize()}}>{taskName}</p>
      <button className='btn-delete-task' onClick={handleDelete}>
        <img src={close} alt='delete icon' aria-label='delete task' />
      </button>
    </div>
  );
};