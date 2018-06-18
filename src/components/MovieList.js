import React from 'react';
import './MovieList.css';
let baseImgUrl = 'https://image.tmdb.org/t/p/w500';

export default function MovieList(props) {
    let movieVoteList = props.movieList.map((element, index) => {
        return (
            <div
            className='movie_list_element'
            key={element.id}>
                <div className='flexbox'>
                    <div 
                    className='voteholder'>
                        <div 
                        onClick={ () => props.voteHandler(element.id, 1) }
                        className='button votes fa fa-sort-up fa-x5'></div>
                        <div 
                        className='voteCount'>{element.voteCount}</div>
                        <div 
                        onClick={ () => props.voteHandler(element.id, 0) }
                        className='button votes fa fa-sort-down fa-x5'></div>
                    </div>
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