import React, { Component } from 'react';
import axios from 'axios';
import TopBar from './components/TopBar'
import MoviePossibilityWindow from './components/MoviePossibilityWindow';
import './App.css';
import NewMovieWindow from './components/NewMovieWindow';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieList: [],
      displayNewMovieWindow: false,
      allowUpdate: true,
    }
    
  }
  backgroundHandler = () => {
    
  }
  updateList= () => {
    
    if(this.state.allowUpdate) {
        Axios.get('/api/movies/simple')
            .then(response => {
              // Comparing movieList to API response
               let flag = true;
            //   let statePlaceHolder = this.state.movieList;
            //   let responseLength = response.data.length;
             

            //   // is response.data an empty array? If so check for changes
            //   if(responseLength > 0) {
            //     console.log('checking movieList to api response')
            //     statePlaceHolder.forEach( (el, i) => {
            //       Object.values(el).forEach( (element, j) => {
            //         console.log(1, element)
            //         console.log(2, Object.values(response.data[i])[j])
            //         flag = !(element === Object.values(response.data[i])[j])
            //       })
            //     })
            //   }

            //  // if theres a difference, or the response is an empty array, update state
              if (flag) {
                console.log('updating list')
                this.setState({movieList: response.data})
              }              
              
             })
            .catch(err => console.error(err))
    }
  }

  isDetailedViewOpen = () => {
    this.setState({allowUpdate: !this.state.allowUpdate})
  }

  voteHandler = (id, vote) => {
    Axios.put(`/api/movies/vote/${id}/${ ( vote > 0 ? 'add' : 'sub' ) }`, {forTheRubric: 'simple'})
        .then( response => this.setState({movieList: response.data}))
  }
  newMovieWindowHandler = () => {
    axios.get('/api/movies/simple').then(response => {
      this.setState({
        movieList: response.data,
        displayNewMovieWindow: !this.state.displayNewMovieWindow,
        displayDetailsWindow: false
      })
    })
  }

  closeDetailedViewHandler = () => {
    this.isDetailedViewOpen()

  }


  render() {
    return (
      <div>
        {this.state.allowUpdate ? null : <div className='darken'></div>  }
      
      <div className='app_container'>
        <TopBar 

        displayNewMovieWindow={this.state.displayNewMovieWindow}
        newMovieWindowHandler={this.newMovieWindowHandler}/>
        
        {this.state.displayNewMovieWindow ? (
          <NewMovieWindow 
          newMovieWindowHandler={this.newMovieWindowHandler}/>
        ) : ( 
          <MoviePossibilityWindow
            voteHandler={this.voteHandler}
            movieList={this.state.movieList} 
            updateList={this.updateList} 
            isDetailedViewOpen={this.isDetailedViewOpen}/> 
        )}
        </div>
        
      </div>
    );
  }
}

export default App;
