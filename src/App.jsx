import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../redux/actions/todo';
import './App.css';

function App({ todos, dispatch }) {
  const [title, setTitle] = useState('');
  console.log(todos);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: title,
      completed: false,
    };
    dispatch(addTodoAction(newTodo));
  };
  return (
    <div>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <button type="submit">add todo</button>
      </form>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>
              {todo.id} {todo.title}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.data,
  };
};
export default connect(mapStateToProps)(App);
