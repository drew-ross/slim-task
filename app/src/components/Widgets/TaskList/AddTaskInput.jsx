import React, { useState } from 'react';

export const AddTaskInput = props => {
  const { addTask } = props;
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChanges = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue('');
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className='AddTaskInput'>
      { showForm ?
        (<form
          className='form-single-input'
          onSubmit={handleSubmit}>
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
          ></input>
          <button>Add</button>
        </form>)
        :
        (<button
          className='btn-show-form'
          onClick={handleShowForm}
        >
          +
        </button>)}

    </div>
  );
};