const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    Movie: String,
    Image: String,
    Director: String,
    Genere: String,
    AvgRatings: Number,
    Language: String,
    AvgCost: String
});

const MoviesModel = mongoose.model("Movies",MovieSchema);

module.exports = MoviesModel;