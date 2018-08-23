const express = require("express");
const bodyParser = require("body-parser");
const ep = require("./endpoints");
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../build"));

app.post("/api/movies/add/:TMDBID/:type", ep.addMovie);
app.get("/api/movies/:type", ep.getCurrentList);
app.get("/api/movies", ep.searchMovies);
app.get("/api/discover", ep.discoverMovies);
app.put("/api/movies/vote/:id/:vote", ep.voteHandler);
app.delete("/api/movies/delete/:id", ep.removeMovie);
// app.get('/api/quote',ep.quote)

const port = process.env.PORT || 3885;

app.listen(port, () => console.log(`Listening on port ${port}`));
