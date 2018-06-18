import React, { Component } from 'react';
import MovieList from './MovieList';
import DetailedViewWindow from './DetailedViewWindow';
import Axios from 'axios';
import './MoviePossibilityWindow.css';

class MoviePossibilityWindow extends Component {
    constructor (props) {
        super(props)

        this.state = {
            displayDetailedViewWindow: false,
            movieList: [],
            detailedMovieList: []
        }
    }

    componentDidMount() {
        this.props.updateList()
    }

    detailedButtonWindowHandler = (index) => {
        this.props.isDetailedViewOpen()
       
        Axios.get('/api/movies/detailed')
            .then(response => this.setState({
                detailedMovieList: response.data[index],
                displayDetailedViewWindow: !this.state.displayDetailedViewWindow
            }))
    }

    closeDetailedWindowHandler = () => {
        this.props.isDetailedViewOpen()
        this.setState({displayDetailedViewWindow: !this.state.displayDetailedViewWindow})
    }

    newMovieHandler = (array) => {
        this.setState({movieList: array})
    }

    render() {
        setTimeout(this.props.updateList, 3000)
        
        return (
            <div className='possiblility_window'>
                <h3>The Possiblities</h3>
                {this.state.displayDetailedViewWindow ? (
                    <DetailedViewWindow
                        updateList={this.props.updateList}  
                        closeDetailedWindowHandler={ this.closeDetailedWindowHandler } 
                        detailedMovieList={ this.state.detailedMovieList } />
                ) : (
                    null
                )}

                <MovieList
                    className='movie_list' 
                    voteHandler={this.props.voteHandler} 
                    allowDetailButton={this.state.displayDetailedViewWindow} 
                    detailedButtonWindowHandler={ this.detailedButtonWindowHandler } 
                    movieList={ this.props.movieList } 
                     />
            </div>
        );
    }
}

export default MoviePossibilityWindow;