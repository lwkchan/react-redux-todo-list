import { combineReducers, createStore } from 'redux';
import todoListApp from './reducers/reducer';

const reducers = combineReducers({
  todoListApp,
});

export default createStore(reducers);
