import React from 'react';

export const Task = ({ id, taskName, complete }) => {

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