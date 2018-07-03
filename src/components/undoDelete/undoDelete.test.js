import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import UndoDelete from './UndoDelete';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('undo delete component', () => {

    const undoDeleteMock = jest.fn()
    const wrapper = shallow(<UndoDelete undoDelete={undoDeleteMock} />);

    it('should call the deleteTodo function when delete button is clicked', () => {
        wrapper.find('.undo-delete').simulate('click');
        expect(undoDeleteMock.mock.calls.length).toEqual(1);
    })
})
