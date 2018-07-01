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
  })
})
