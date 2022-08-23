import React, { useState } from 'react';
import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <li
      className={`list-group-item p-3 callout-${
        props.todo.completed ? 'success' : 'warning'
      }`}
    >
      {isEdit ? (
        <TodoForm />
      ) : (
        <TodoContent
          todo={props.todo}
          fetchTodos={props.fetchTodos}
          openEdit={() => setIsEdit(true)}
        />
      )}
    </li>
  );
}

export default TodoItem;
