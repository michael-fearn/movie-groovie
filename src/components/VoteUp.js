import React from 'react';

export default function VoteUp(props) {
    return (
                                <div 
                        onClick={ () => props.voteHandler(props.element.id, 1) }
                        className='button votes fa fa-sort-up fa-x5'></div>
    )
}