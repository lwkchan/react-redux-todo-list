import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import TodoList from './todoList';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('TodoList component', () => {
    let wrapper;
    let props;
    let deleteMock

    beforeEach(() => {
        deleteMock = jest.fn();
        props = {
            todos: [
                {
                    id: 1,
                    text: 'A todo',
                }
            ],
            deleteTodo: deleteMock,
        }
        
        wrapper = shallow(<TodoList {...props} />);
    })

    it('should render successfully', ()=>{
        expect(wrapper.exists()).toEqual(true);
    });

    it('should display a todo when passed in as a prop', () => {
        expect(wrapper.find('.todo-text').text()).toEqual(props.todos[0].text);
    });

    it('should call the deleteTodo function when delete button is clicked', () => {
        wrapper.find('.todo-delete').simulate('click');
        expect(deleteMock.mock.calls.length).toEqual(1);
    })
})