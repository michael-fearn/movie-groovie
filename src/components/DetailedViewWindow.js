import React from 'react';
import axios from 'axios';
import './DetailedWindowView.css';
let baseImgUrl = 'https://image.tmdb.org/t/p/w500';


export default function DetailedViewWindow(props) {
    let { id, title, tagline, overview, voteCount, poster_path, background_path, vote_average } = props.detailedMovieList;
    console.log(id)
    return (
        <div className='detailed_window'>
            <div className='detailsbar'>
            <div className='subheading_title'>Details</div>
            <div onClick={() => {
                axios.delete(`/api/movies/delete/${id}`, {forTheRubric: "simple"}).then(response => props.updateList(response.data))
                props.closeDetailedWindowHandler()}}>remove</div>
            <div onClick={() => props.closeDetailedWindowHandler()}>Close</div>
            </div>
                <img src={`${baseImgUrl}${poster_path}`} alt=""/>
        { [id, title, tagline, overview, voteCount, poster_path, background_path, vote_average] }
        </div>
    ) 
    
}