import React from 'react';
import './TopBar.css';

export default function TopBar(props) {
    return (
        <div className='title_bar'>
            <div className='title_bar_flex'>
                <div>
                    Movie Groovie
                </div>
                <div 
                className='title_bar_add_button'
                onClick={props.newMovieWindowHandler}>Add Movie</div>
            </div>
        </div>
    )
}