import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';
// const axios =require('axios') Backend side

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    axios
      .get('http://localhost:8080/todos')
      .then((res) => {
        //{data,status,statusText,header,request,...}
        console.log(res.data);
        setTodos(res.data.todos)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
      <div className='my-4'>
        <TodoForm />
      </div>
      <TodoContainer todos={todos}/>
    </div>
  );
}

export default App;
