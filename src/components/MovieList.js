import React from 'react';
import './MovieList.css';

export default function MovieList(props) {
    let movieVoteList = props.movieList.map((element, index) => {
        return (
            <div
            className='movie_list_element'
            key={element.id}>
                <div>
                    <div 
                    className='voteholder'>
                        <div 
                        onClick={ () => props.voteHandler(element.id, 1) }
                        className='listspacing  votebox'>up</div>
                        <div 
                        onClick={ () => props.voteHandler(element.id, 0) }
                        className='listspacing votebox'>down</div>
                    </div>
                    <div 
                    className='listspacing movielist_title'>{element.title}</div>
                    <div 
                    className='listspacing movielist_title'>Votes: {element.voteCount}</div>
                    <div 
                    onClick={ ( props.allowDetailButton ? null :  () => props.detailedButtonWindowHandler(index) )}   
                    className='listspacing movieVoteList_detailButton'>Details</div>
                </div>
            </div>
        )
    })
     return (
        <div>{ movieVoteList }</div>
    );
}