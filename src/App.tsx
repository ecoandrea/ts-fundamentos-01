import { useState } from "react";
import FormAddTodo from "./components/FormAddTodo";
import Todos from "./components/Todos";

export interface Todo {

  text: string;
  completed: boolean;
}

const initialTodos = [
  {
    text: "Learn React",
    completed: false,
  },
  {
    text: "Learn Typescript",
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

const addTodo = (text: string) => {
    const newTodo =  {
       text, 
       completed: false 
      }
    setTodos([...todos, newTodo]);
  }

const toggleTodo = (selectedTodo : Todo) => {
setTodos(prevTodos => {
  return prevTodos.map((todo) => {
    if (todo === selectedTodo) {
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    return todo;
  });
})
    }

    const removeTodo = (selectedTodo : Todo) => {
      setTodos(prevTodos => {
        return prevTodos.filter((todo) => todo!== selectedTodo);
        });
      };
    
    
  return (
    <div className="container">
      <h1>TODO</h1>
      <FormAddTodo addTodo={addTodo} />
      <div>
     <Todos
     todos={todos}
     toggleTodo={toggleTodo}
     removeTodo={removeTodo}
     /> 
    </div>
    </div>
  );
};

export default App;
