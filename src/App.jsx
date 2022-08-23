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

  const handleSubmitCreate = async title =>{
 try {
      const res = await axios.post('http://localhost:8080/todos', {
        title,
        completed: false,
      });
      fetchTodos()
      console.log(res.data)
    } catch(err){
      console.log(err)
    }
  }
  return (
    <div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
      <div className='my-4'>
        <TodoForm onSubmit={handleSubmitCreate} />
      </div>
      <TodoContainer todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
