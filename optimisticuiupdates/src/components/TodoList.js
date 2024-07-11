import React, { useState } from 'react';
import { addTodo, deleteTodo } from '../services/api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(null);

  const handleAddTodo = async () => {
    const optimisticTodo = { id: Date.now(), text: newTodo };
    setTodos([...todos, optimisticTodo]);

    try {
      await addTodo(optimisticTodo);
      setNewTodo('');
    } catch (err) {
      setError('Failed to add todo');
      setTodos(todos.filter(todo => todo.id !== optimisticTodo.id));
    }
  };

  const handleDeleteTodo = async (id) => {
    const originalTodos = [...todos];
    setTodos(todos.filter(todo => todo.id !== id));

    try {
      await deleteTodo(id);
    } catch (err) {
      setError('Failed to delete todo');
      setTodos(originalTodos);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p>{error}</p>}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;