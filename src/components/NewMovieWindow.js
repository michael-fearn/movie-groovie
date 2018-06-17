import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NewMovieList from './NewMovieList';

class NewMovieWindow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showDiscoverView: false,
            discoverResults:[],
            searchResults:[],
            input: ''
        }  
    }
    
    inputHandler = (value) => {
        this.setState({input: value})
        let formattedSearch = value;
        formattedSearch.split(' ').join("+")
        axios.get(`/api/movies?search=${formattedSearch}`)
            .then(response => this.setState({searchResults: response.data}))
    }

    selectHandler(id) {
       this.setState({input: ''})
       axios.post(`/api/movies/add/${id}/simple`)


    }

    discoverButtonHandler = ()  => {
        axios.get('/api/discover').then( response => {
            this.setState({
                discoverResults: response.data,
                showDiscoverView: !this.state.showDiscoverView})
        })
        
       
    }

     render() {
         return (
            <div>
                <div onClick={this.discoverButtonHandler}>Current Favorites</div>
                { this.state.showDiscoverView ? ( 
                    <NewMovieList
                    numberOfResults={7} 
                    newMovieWindowHandler={this.props.newMovieWindowHandler}
                    searchResults={this.state.discoverResults} />
                ) : ( 
                    <SearchBar
                    numberOfResults={5}
                    inputHandler={this.inputHandler}
                    searchResults={this.state.searchResults}
                    newMovieWindowHandler={this.props.newMovieWindowHandler} /> )} 
            </div>
        )
    }
}

export default NewMovieWindow;