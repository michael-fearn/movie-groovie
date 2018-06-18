import React from 'react';
import Axios from 'axios';

let baseImgUrl = 'https://image.tmdb.org/t/p/w500';

export default function NewMovieList (props) {
    function selectSearch(id) {
        Axios.post(`/api/movies/add/${id}/simple`,{heck:'yea'})
        props.newMovieWindowHandler()
    }
     
    let results = props.searchResults.slice(0,props.numberOfResults).map( (el, i) => {
        return (
            <div 
            key={el.id}
            className='button movie_list_element flexbox_add'
            onClick={() => selectSearch(el.id)}>
                
                <div><img className='list_element_img_lrg' src={`${baseImgUrl}${el.poster_path}`} alt=' '/></div>    
               <div className='movielist_title_large'>{el.title}</div> 
            </div>
        )
        })
    return (
        <div>{results}</div>
    )
}