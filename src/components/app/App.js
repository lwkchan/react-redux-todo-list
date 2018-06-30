import React, { Component } from 'react';
import AddTodo from '../addTodo/addTodo';
import './App.css';

const App = () =>
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={() => {}}/>
  </div>

export default App;
