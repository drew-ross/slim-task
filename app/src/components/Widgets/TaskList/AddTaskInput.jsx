import React, { useState, useRef, useEffect } from 'react';
import { getThemeStyle } from '../../../themes/themeFunctions';

const characterLimit = 75;

export const AddTaskInput = props => {
  const { addTask, theme } = props;
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
    <div
      className='AddTaskInput'
      style={getThemeStyle(theme, 'color')}>
      {
        showForm ?
          (
            <form
              style={getThemeStyle(theme, 'borderColor')}
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
                style={getThemeStyle(theme, 'color')}
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
    </div >
  );
};

const Input = props => {
  const { value, onChange, id, placeholder, style } = props;
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      style={style ? style : null}
      id={id}
      ref={inputRef}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};