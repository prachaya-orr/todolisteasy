import React from 'react';
import PageLimit from './PageLimit';
import SearchStatus from './SearchStatus';
import SearchText from './SearchText';
import Sort from './Sort';
import TodoList from './TodoList';
import Pagination from './Pagination'

function TodoContainer(props) {
  return (
    <>
      <div className='my-2 d-flex gap-3'>
        {/* ********** SEARCH TEXT ********** */}
        <SearchText />
        {/* ********** END SEARCH TEXT ********** */}

        {/* ********** SEARCH STATUS ********** */}
        <SearchStatus />
        {/* ********** END SEARCH STATUS ********** */}
      </div>
      
      <div className='my-2 d-flex justify-content-between'>
        <PageLimit/>
        <Sort/>
      </div>
      <TodoList todos={props.todos} fetchTodos={props.fetchTodos}/>
      <div className='my-2 d-flex justify-content-between align-items-center'>
        <small className='text-muted'>Showing 6 to 10 of 12 entries</small>
        <Pagination />
      </div>
    </>
  );
}

export default TodoContainer;
