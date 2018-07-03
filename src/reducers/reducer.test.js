 import types from '../constants/ActionTypes';
import { reducer, initialState } from './reducer.js';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  describe('Submit todo', () => {
    let action1;
    let action2;

    beforeEach(() => {
      action1 = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };
      action2 = {
        type: types.SUBMIT_TODO,
        id: 2,
        text: todoText,
      };
    })

    it('should return the correct state after adding one todo', () => {
      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(undefined, action1)).toEqual(expectedState);
    });

    it('should return the correct state after adding a second todo', () => {
      const existingState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
          {
            id: 2,
            text: todoText,
          },
        ],
      }

      expect(reducer(existingState, action2)).toEqual(expectedState)
    })
  });

  describe('delete todo', () => {
    it('should return the correct state after deleting a todo', () => {
      const existingState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
          {
            id: 2,
            text: todoText,
          },
        ]
      }

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
        lastDeleted: {
          id: 2,
          text: todoText,
        },
      };

      const action = {
        type: types.DELETE_TODO,
        id: 2,
      };

      expect(reducer(existingState, action)).toEqual(expectedState)
    });
  });

  describe('undo delete todo', () => {
    it('should return the correct state after undeleting a todo', () => {
      const existingState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
          {
            id: 2,
            text: todoText,
          },
        ],
        lastDeleted: {
          id: 3,
          text: todoText,
        },
      };

      const action = {
        type: types.UNDO_DELETE_TODO
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
          {
            id: 2,
            text: todoText,
          },
          {
            id: 3,
            text: todoText,
          },
        ],
        lastDeleted: {},
      };

      expect(reducer(existingState, action)).toEqual(expectedState);
    })
  })
})
