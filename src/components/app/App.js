import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from '../addTodo/addTodo';
import actions from '../../actions/actions';
import TodoList from '../todoList/todoList';
import './App.css';

export const App = ({ submitTodo, deleteTodo, todos }) =>
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={submitTodo}/>
    <TodoList todos={todos} deleteTodo={deleteTodo}/>
  </div>

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
