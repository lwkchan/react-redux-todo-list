import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTodo from './addTodo';
Enzyme.configure({ adapter: new Adapter() })

describe('AddTodo component', () => {
  let wrapper;
  const submitMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <AddTodo
        submitTodo={submitMock}
      />,
    );
  });

  it('should render successfully', () => {
    expect(wrapper.exists()).toEqual(true);
  })

  it('should have one input', () => {
    expect(wrapper.find('.todo-input').length).toEqual(1);
  })

  describe('Add todo button', () => {
    it('should exist', () => {
      expect(wrapper.find('.todo-submit').length).toEqual(1);
    })

    it('should call the submitTodo function when clicked', () => {
      const component = mount(<AddTodo submitTodo={submitMock}/>);

      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1)
    })
  })
})
