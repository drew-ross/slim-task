import React, { useState, useRef, useEffect } from 'react';

const characterLimit = 75;

export const AddTaskInput = props => {
  const { addTask } = props;
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChanges = e => {
    const { value } = e.target;
    if (value.length <= characterLimit) {
      setInputValue(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue !== '') {
      addTask(inputValue.trim());
      setInputValue('');
    }
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className='AddTaskInput'>
      { showForm ?
        (
          <form
            className='form-single-input'
            onSubmit={handleSubmit}
          >
            <label
              htmlFor='input-new-task'
              className='label--hidden'
            >
              New Task
          </label>
            <Input
              id='input-new-task'
              placeholder='New Task'
              value={inputValue}
              onChange={handleInputChanges}
            />
            <p className='character-limit'>{`${inputValue.length}/${characterLimit}`}</p>
            <button>Add</button>
          </form>
        ) : (
          <button
            className='btn-show-form'
            onClick={handleShowForm}
          >
            +
          </button>
        )
      }
    </div>
  );
};

const Input = props => {
  const { value, onChange, id, placeholder } = props;
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      id={id}
      ref={inputRef}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};;