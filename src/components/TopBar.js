import React from 'react';
import './TopBar.css';

export default function TopBar(props) {
    return (
        <div className='title_bar'>
            <div className='title_bar_flex'>
                <div className='title_text'>
                    Movie Groovie
                </div>
                { props.displayNewMovieWindow ? ( 
                    <div 
                    className='title_bar_add_button button'
                    onClick={props.newMovieWindowHandler}>Back to the Possibilities</div>
                ):(
                    <div 
                    className='title_bar_add_button button'
                    onClick={props.newMovieWindowHandler}>Add Movie</div>
                )}
            </div>
        </div>
    )
}