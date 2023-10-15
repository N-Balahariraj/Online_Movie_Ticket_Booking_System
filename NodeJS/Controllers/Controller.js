const MovieModel = require("../Models/Model");

exports.create = (req, res) => {
  const { Movie, Image, Director, Genere, AvgRatings, Language, AvgCost } =
    req.body;
  const newMovie = new MovieModel({
    Movie,
    Image,
    Director,
    Genere,
    AvgRatings,
    Language,
    AvgCost,
  });
  newMovie
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).json({ message: "Bad request!!!" });
      }
      res
        .status(200)
        .json({ message: "The data successfully added to MongoDB :) :) " });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Not Available :( :(" });
    });
};

exports.fetch = (req, res) => {
  MovieModel.find()
    .then((data) => {
      if (!data) res.status(404).json({ message: "Data not found" });
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Not Available :( :(" });
    });
};

exports.updateOne = (req, res) => {
  const _id = req.params.id;
  MovieModel.findByIdAndUpdate(_id,{Director:"Christopher Nolan",Genere:"superhero crime thriller"})
    .then((data) => {
      if (!data) res.status(400).json({ message: "Bad request" });
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Server not available" });
    });
};

exports.delete = (req, res) => {
  const _id = req.params.id;
  MovieModel.findByIdAndDelete(_id)
    .then(() => {
      if (!data) res.status(404).json({ message: "Server not found" });
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Server not available" });
    });
};
