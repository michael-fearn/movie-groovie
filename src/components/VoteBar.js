import React from 'react';
import VoteUp from './VoteUp';
import VoteDown from './VoteDown';
export default function VoteBar(props) {
    return (
        <div 
            className='voteholder'>
            <VoteUp 
                element={props.element}
                voteHandler={props.voteHandler}/>
            <div 
            className='voteCount'>{props.element.voteCount}</div>
            <VoteDown 
                element={props.element}
                voteHandler={props.voteHandler} />
        </div>
    )
}