import React, { useState } from 'react';

export const AddTaskInput = props => {
  const { addTask } = props;
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

  return (
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
  );
};