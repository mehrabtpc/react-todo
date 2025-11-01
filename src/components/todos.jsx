import { useState } from 'react';
import { TodoItem } from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

function Todos (){
    const [todos,setTodos] =useState([
        {
            id: uuidv4(),
            title: "todo 1",
            checked:0,
        },
        {
            id: uuidv4(),
            title:'todo 2',
            checked:1,
        }

    ])
  const handleCreateTodo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: event.target.value,
          checked: 1
        }
      ]);
      event.target.value = '';
    }
  };
  const handleDeleteTodo = (todo) => {
    let newTodos = todos.filter((TodoItem)=>{
      return todo != TodoItem.id;
    })
    setTodos(newTodos);
  }

  const handleDoneTodo = (todo) => {
      let newTodos = todos.map((TodoItem)=>{
        if(todo == TodoItem.id){
          TodoItem.checked = !TodoItem.checked;
      }
        return TodoItem;
    })
      setTodos(newTodos);
  }
  const handleUpdateTodo = (todo) => {

    alert('developing edit');
  }

    return(
        <>
        <div className="bg-gray-100">
            <div className="flex items-center justify-center h-screen">
                <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                    <div className="flex items-center mb-6">
                        <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                    </div>
                    <div className="relative">
                        <input type="text" onKeyDown={handleCreateTodo} placeholder="What needs to be done today?"
                        className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                    </div>
                    <ul className="list-reset">
                        { todos.map((todo) => ( 
                            <TodoItem
                            key={todo.id} 
                            todo = {todo}
                            onDelete={() => handleDeleteTodo(todo.id)} 
                            onUpdate={() => handleUpdateTodo(todo.id)} 
                            onChange={() => handleDoneTodo(todo.id)} 
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Todos;