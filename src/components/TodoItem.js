import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import TodoForm from './TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoItem() {
  const [todo, setTodo] = useState([{ id: nanoid(), body: "Sample Task", completed: false }]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null)

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newTask.trim() === "") return; 

    if (editTaskId) {
      setTodo(prevTodos =>
        prevTodos.map(task =>
          task.id === editTaskId ? { ...task,body: newTask.trim() } : task
        )
      );
      setEditTaskId(null);
    } else {
      const newTodo = {
        id: nanoid(),
        body: newTask.trim(),
        completed: false
      };
      setTodo(prevTodos => [newTodo, ...prevTodos]);
    }
    
    setNewTask("");
  }

  function toggleComplete(id) {
    setTodo(prevTodo => 
      prevTodo.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id){
    setTodo(prevTodo =>
        prevTodo.filter(task => task.id !== id)
    )
  }

  function onEdit(id) {
    const taskToEdit = todo.find(task => task.id === id);
    setNewTask(taskToEdit.body);
    setEditTaskId(id);
  }
  return (
    <div className="container mt-5">
      <form className="todoitem-form d-flex mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task for today..."
          className="form-control"
          value={newTask}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary ml-2">
          Add Task
        </button>
      </form>
      <TodoForm todos={todo} toggleComplete={toggleComplete} deleteTask={deleteTask} onEdit={onEdit}/>
    </div>
  );
}
