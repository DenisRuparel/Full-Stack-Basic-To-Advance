import React, { useState } from 'react';
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const editTask = (index, newTaskValue) => {
    const newTasks = tasks.map((task, i) => (i === index ? newTaskValue : task));
    setTasks(newTasks);
  };
  return (
    <div className="todo-list">
      <h1>Get Things Done!</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What is the task today?"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <input
              type="text"
              value={task}
              onChange={(e) => editTask(index, e.target.value)}
            />
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;