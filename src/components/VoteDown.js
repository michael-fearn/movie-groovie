import React from 'react';

export default function VoteDown(props) {
    return (
        <div 
            onClick={ () => props.voteHandler(props.element.id, 0) }
            className='button votes fa fa-sort-down fa-x5'></div>
    )
}