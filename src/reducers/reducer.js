import types from '../constants/ActionTypes';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };

      case types.DELETE_TODO:
        return {
          ...state,
          todos: [
            ...state.todos.filter(todo =>
              todo.id !== action.id
            ),
          ],
          lastDeleted: state.todos.filter(todo => 
            todo.id === action.id
          ).pop()
        };

      case types.UNDO_DELETE_TODO:
        return {
          ...state,
          todos: [
            ...state.todos,
            state.lastDeleted
          ],
          lastDeleted: {}
        }
      
    default:
      return state;
  };
};

export default reducer;
