import React from 'react';
import NewMovieList from './NewMovieList';
import './SearchBar.css';
export default function SearchBar(props) {
    return (
        <div className='search_bar_align'>
            <input 
            type="text"
            className='search_bar'
            onChange={(event) => props.inputHandler(event.target.value)}
            value={props.input}
            placeholder='Search Movies'/>
        
            {(props.searchResults.length > 0 ? <NewMovieList newMovieWindowHandler={props.newMovieWindowHandler} searchResults={props.searchResults}/> : null )}
         
        </div>
    )
}