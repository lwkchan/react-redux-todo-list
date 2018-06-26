import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTodo from './addTodo';

Enzyme.configure({ adapter: new Adapter() })

describe('AddTodo component', () => {
  it('should render successfully', () => {
    const wrapper = shallow(<AddTodo/>);
    expect(wrapper.exists()).toEqual(true);
  })

  it('should have one input', () => {
    const wrapper = shallow(<AddTodo/>);
    expect(wrapper.find('.todo-input').length).toBe(1)
  })
})
