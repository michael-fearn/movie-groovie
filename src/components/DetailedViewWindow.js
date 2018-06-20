import React from 'react';
import axios from 'axios';
import './DetailedWindowView.css';
let baseImgUrl = 'https://image.tmdb.org/t/p/w500';


export default function DetailedViewWindow(props) {

    let { id, title, tagline, overview, poster_path } = props.detailedMovieList;

    let deleteHandler = () => {
        axios.delete(`/api/movies/delete/${id}`, {forTheRubric: "simple"}).then(response => props.updateList(response.data))
        props.closeDetailedWindowHandler()
    }
    
    return (
        <div className='details_container'>
            <div className='details_window'>
                
                <div className='details_bar'>
                    
                    <div className='details_title'>{title}</div>  
                    
                    <div 
                    onClick={deleteHandler}
                    className='button movieVoteList_detailButton'>Remove</div>
                    
                    <div 
                    onClick={props.closeDetailedWindowHandler}
                    className=' button movieVoteList_detailButton'>Close</div>
                
                </div>

                
                <div className='details_window_content'>
                    <img className='details_poster' src={`${baseImgUrl}${poster_path}`} alt=""/>
                    <div classname='details_data_container'>
                        <div className='details_content'><h3>{title}</h3></div>
                        <div className='details_content'><h4>{tagline}</h4></div>
                        <div className='details_content'><p>{overview}</p></div>
                    </div>
            
                </div>
            </div>
        
        </div>
            
    ) 
    
}