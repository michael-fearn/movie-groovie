import React from 'react';
import NewMovieList from './NewMovieList';

export default function SearchBar(props) {
    return (
        <div>
            <input 
            type="text"
            onChange={(event) => props.inputHandler(event.target.value)}
            value={props.input}/>
        
            {(props.searchResults.length > 0 ? <NewMovieList newMovieWindowHandler={props.newMovieWindowHandler} searchResults={props.searchResults}/> : null )}
         
        </div>
    )
}