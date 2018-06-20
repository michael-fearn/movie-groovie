import React from 'react';
import './MovieList.css';
import VoteBar from './VoteBar';
let baseImgUrl = 'https://image.tmdb.org/t/p/w500';


export default function MovieList(props) {
    let movieVoteList = props.movieList.map((element, index) => {
        return (
            <div
            className='movie_list_element'
            key={element.id}>
                <div className='flexbox'>
                    <VoteBar
                        element={element}
                        voteHandler={props.voteHandler} />
                    <div className='imgfix'><img className='list_element_img' src={`${baseImgUrl}${element.poster_path}`}/></div>
                    <div 
                    className='listspacing movielist_title'>{element.title}</div>
                    <div 
                    onClick={ ( props.allowDetailButton ? null :  () => props.detailedButtonWindowHandler(index) )}   
                    className='button listspacing movieVoteList_detailButton'>Details</div>
                </div>
            </div>
        )
    })
    return (
        <div>{ movieVoteList }</div>
    );
}