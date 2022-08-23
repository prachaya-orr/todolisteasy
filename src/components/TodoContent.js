import React from 'react';

function TodoContent(props) {
  return (
    <div className='d-flex align-items-center'>
      <span className='flex-fill' role='button'>
        {props.todo.title}
      </span>
      <div className='btn-group'>
        <button className='btn btn-outline-secondary'>
          <i
            className={`fa-solid fa-toggle-${
              props.todo.completed ? 'on' : 'off'
            }`}
          />
        </button>
        <button className='btn btn-outline-secondary'>
          <i className='fa-regular fa-trash-can' />
        </button>
      </div>
    </div>
  );
}

export default TodoContent;
