const axios = require('axios'); 
const API_KEY = 'fbefd173d16a353c361f4cad7477f842';

let movieList = [];



let simpleMovieData = (obj) => {
    return obj.map(element => {
        
        let {id,title,vote_average,voteCount} = element;
        
        return {
            id,
            title,
            vote_average,
            voteCount
        }
    })
}

let detailedMovieData = (obj) => {
    return obj.map(element => {
        
        let { id, title, tagline, overview, poster_path, backdrop_path, voteCount, vote_average } = element;
        
        return {
            id,
            title,
            tagline,
            overview,
            voteCount,
            poster_path,
            backdrop_path,
            vote_average 
        }
    })
}

let typeCheck = (type, res) => {
    if(type === 'simple') {
        res.status(200).send(simpleMovieData(movieList));
    } else if(type === 'detailed') {
        res.status(200).send(detailedMovieData(movieList));
    } else {
        res.status(400);
    }
}



module.exports = {
    addMovie: (req, res) => {
        let flag = true;
        movieList.forEach( element => {
            if (element.id === +req.params.TMDBID) {
                flag = false;
            }
        })

        if(flag) {
            
            axios.get(`https://api.themoviedb.org/3/movie/${req.params.TMDBID}?api_key=${API_KEY}`).then(response => {

                let { id, title, tagline, overview, poster_path, vote_average, backdrop_path } = response.data
                
                movieList.push({
                    voteCount: 0,
                    id,
                    title,
                    tagline,
                    overview,
                    poster_path,
                    vote_average,
                    backdrop_path
                })
                typeCheck(req.params.type, res)

            }).catch(err => res.status(404).send(err))

        } else {res.status(404).send('Bad request or duplicate')}
        
    },

    getCurrentList: (req, res) => {
        typeCheck(req.params.type, res)
    },

    voteHandler: (req, res) => {
        console.log(req.params)
        if(req.params.id && req.params.vote) {
            movieList.forEach(element => {
                if (element.id === +req.params.id) {
                    if (req.params.vote === 'add') {
                        element.voteCount++;
                    } else if (req.params.vote === 'sub') {
                        element.voteCount--;
                    } else {   
                        res.status(400);
                    }
                }
            })
            
            movieList.sort((a,b) => { return b.voteCount- a.voteCount })
            
            typeCheck(req.body.forTheRubric, res);
                        
        } else {
            res.status(400);
        }
    },

    searchMovies: (req, res) => {
        console.log(req.query.search)
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${req.query.search}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
            .then(response => res.send(response.data.results).status(200))
            .catch(err => err)
    }, 

    discoverMovies: (req, res) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?year=${+req.query.year}&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(response => res.send(response.data.results).status(200))
    },

    removeMovie: (req,res) => {
        let index = movieList.findIndex((element) => element.id === +req.params.id)
        movieList.splice(index,1)
       
        typeCheck(req.body.forTheRubric, res);
    }

}