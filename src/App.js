import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <TodoItem />
    </div>
  );
}
