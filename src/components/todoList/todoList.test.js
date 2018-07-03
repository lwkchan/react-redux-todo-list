import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import TodoList from './todoList';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('TodoList component', () => {
    let wrapper

    beforeEach(() => {
        const todos = [
            {
                id: 1,
                text: 'A todo',
            }
        ];
        wrapper = shallow(<TodoList todos={todos}/>);
    })

    it('should render successfully', ()=>{
        expect(wrapper.exists()).toEqual(true);
    });

    it('should display a todo when passed in as a prop', () => {
        expect(wrapper.find('.todo-text').text()).toEqual(todos[0].text);
    })
})