import React from 'react';

export const Task = ({ task, updateTask, removeTask }) => {

  const { complete, taskName } = task;

  const handleCheck = () => {
    updateTask({
      ...task,
      complete: !complete
    });
  };

  return (
    <div
      className='Task'
      aria-label='Task'
    >
      <input
        type='checkbox'
        checked={complete}
        onChange={handleCheck}
      />
      <p>{taskName}</p>
    </div>
  );
};