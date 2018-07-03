import React from 'react';
import PropTypes from 'prop-types';

const UndoDelete = ( { undoDelete } ) => {
    return (
        <button 
        type='button'
        className='undo-delete'
        onClick={() => undoDelete()}
        >
        Undo delete
        </button>
    )
}

UndoDelete.propTypes = {
    undoDelete: PropTypes.func.isRequired
}

export default UndoDelete;