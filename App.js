import { useState, useRef, useEffect } from "react";


/**
 * This is a todo app with multiple bugs and badly written lines.
 * Can you fix these bugs and make code follow good practices?
 * В этом коде есть несколько багов и гавнокода, ты можешь это исправить?
 * Можно воспользоватся кодсандбоксом для исправления кода: https://codesandbox.io/s/new?file=/src/App.js:0-1806
 */

const generateId = (() => {
  let count = 0;
  return () => {
    return ++count;
  };
})();
export default function App() {
  const [todos, changeTodos] = useState([]);
  const [value, changeValue] = useState("");
  const inputRef = useRef('foo');
  const addTodo = () => {
    let updateTodos = [...todos]
    const newTodo = {
      text: value,
      id: generateId(),
    };
    updateTodos.unshift(newTodo)
    changeTodos(updateTodos);
  };
  console.log(todos)
  const handleDelete = (id) => {
    let updateTodos = [...todos]
    for(let i =0; i< updateTodos.length; i++){
      if(i === 0 &&  updateTodos[i].id === id){
        updateTodos.shift()
      }
       else if(updateTodos[i].id === id){
        updateTodos.splice(i,i)
      }
    }
    changeTodos(updateTodos)
  };

  const handleComplete = (id, index) => {
    let updateTodos = [...todos]
    for(let i =0; i< updateTodos.length; i++){
      if(i === 0 &&  updateTodos[i].id === id){
        updateTodos[i].complete = true
      }
       else if(updateTodos[i].id === id){
        updateTodos[i].complete = true
      }
    }
    changeTodos(updateTodos)
    // const item = todos.find((item, ii) => ii === index);
    // item.complete = true;
    // changeTodos(todos);
  };

  useEffect(() => {
    return () => changeValue("");
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        ref={inputRef}
        value={value}
        onChange={(ev) => changeValue(ev.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((todo, index) => (
        <li key={todo.id}>
          {todo.complete ?
            <strike>{todo.text}</strike>
          :
            todo.text
          }
          <button onClick={() => handleComplete(todo.id, index)}>complete</button>
          <button onClick={() => handleDelete(todo.id)}>delete</button>
        </li>
      ))}
    </div>
  );
}