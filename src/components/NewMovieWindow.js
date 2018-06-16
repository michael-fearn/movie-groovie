import React, { Component } from 'react';
import axios from 'axios';
import NewMovieList from './NewMovieList';
class NewMovieWindow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchResults:[],
            input: ''
        }  
    }
    
    inputHandler(value) {
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

     render() {
         return (
            <div>
                <input 
                type="text"
                onChange={(element) => this.inputHandler(element.target.value)}
                value={this.state.input}/>
                
                {(this.state.searchResults.length > 0 ? <NewMovieList newMovieWindowHandler={this.props.newMovieWindowHandler} searchResults={this.state.searchResults}/> : null )}
            </div>
        )
    }
}

export default NewMovieWindow;