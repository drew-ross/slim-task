import React from 'react';

export const Task = ({ task }) => {

  const { complete, taskName } = task;

  return (
    <div
      className='Task'
      aria-label='Task'
    >
      <input
        type='checkbox'
        checked={complete}
      />
      <p>{taskName}</p>
    </div>
  );
};