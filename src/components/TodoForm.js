import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button className="submit" onClick={props.handleAddTodo}>Add Todo</button>
      <button className="remove" onClick={props.handleClearTodos}>Remove Completed</button>
    </form>
  );
};

export default TodoForm;