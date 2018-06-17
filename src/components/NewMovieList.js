import React from 'react';
import Axios from 'axios'

export default function NewMovieList (props) {
    function selectSearch(id) {
        Axios.post(`/api/movies/add/${id}/simple`,{heck:'yea'})
        props.newMovieWindowHandler()
    }
     
    let results = props.searchResults.slice(0,props.numberOfResults).map( (el, i) => {
        return (
            <div 
            key={el.id}
            onClick={() => selectSearch(el.id)}>
                {el.title}
            </div>
        )
        })
    return (
        <div>{results}</div>
    )
}