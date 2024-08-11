import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoForm({ todos, toggleComplete, deleteTask, onEdit}) {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className="list-group-item d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className={`ml-3 ${todo.completed ? 'completed' : ''}`} onClick={() => toggleComplete(todo.id)}>
            {todo.body}
          </span>
          <button
            className="btn btn-link edit-btn" 
            onClick={() => onEdit(todo.id)}
          >
             <i className="bi bi-pencil"></i>
          </button>
          <button
            className='delete-btn' onClick={() => deleteTask(todo.id)}>
            <i className="bi bi-trash"></i>
            </button>
            
        </li>
      ))}
    </ul>
  );
}
