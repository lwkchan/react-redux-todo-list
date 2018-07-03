import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { initialState } from '../../reducers/reducer'
import { App } from './App';
Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const mockFunction = jest.fn();

  const wrapper = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todos={[]}
    />,
  );

  expect(wrapper.exists()).toEqual(true);
});
