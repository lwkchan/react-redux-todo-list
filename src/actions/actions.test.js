import actions from './actions';
import types from '../constants/ActionTypes';

describe('Actions', () => {
  const todoText = 'what i need to do';

  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText,
    };

    expect(actions.submitTodo(todoText)).toEqual(expectedAction)
  })

  it('should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 1,
    };
    const id = 1;

    expect(actions.deleteTodo(id)).toEqual(expectedAction)
  })

  it('should create an action to undo a deleted todo', () => {
    const expectedAction = {
      type: types.UNDO_DELETE_TODO,
    }

    expect(actions.undoDelete()).toEqual(expectedAction);
  })
})
