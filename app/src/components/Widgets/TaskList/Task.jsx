import React from 'react';

export const Task = ({ task, updateTask, removeTask }) => {

  const { complete, taskName, uuid } = task;

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
      className='Task'
      aria-label='Task'
    >
      <input
        type='checkbox'
        checked={complete}
        onChange={handleCheck}
      />
      <p>{taskName}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};