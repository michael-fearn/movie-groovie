const express = require('express');
const bodyParser = require('body-parser');
const ep = require('./endpoints');

const app = express();
app.use(bodyParser.json());


app.post('/api/movies/add/:TMDBID/:type', ep.addMovie);
app.get('/api/movies/:type', ep.getCurrentList);
app.get('/api/movies', ep.searchMovies);
app.get('/api/discover', ep.discoverMovies);
app.put('/api/movies/vote/:id/:vote', ep.voteHandler);
app.delete('/api/movies/delete/:id', ep.removeMovie);


const port = 3005;

app.listen(port, () => console.log(`Listening on port ${port}`));
