import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';
// const axios =require('axios') Backend side

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:8080/todos');
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // axios
    //   .get('http://localhost:8080/todos')
    //   .then((res) => {
    //     //{data,status,statusText,header,request,...}
    //     // console.log(res.data);
    //     setTodos(res.data.todos);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fetchTodos();
  }, []);

  return (
    <div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
      <div className='my-4'>
        <TodoForm fetchTodos={fetchTodos}  />
      </div>
      <TodoContainer todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
