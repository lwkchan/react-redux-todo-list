import types from '../constants/ActionTypes'

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
}

const actions = {
  submitTodo (text) {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      text,
    };
  },

  deleteTodo (id) {
    return {
      type: types.DELETE_TODO,
      id: id,
    };
  },

  undoDelete () {
    return {
      type: types.UNDO_DELETE_TODO,
    }
  }
};

export default actions;
