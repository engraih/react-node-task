const Joi = require('joi');
const mongoose = require('mongoose');


const Movie = mongoose.model('Movies', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  genre: { 
    type: String,  
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
   imdbRating: { 
    type: Number, 
    required: true,
    min: 0
  },
  personalRating: { 
    type: Number, 
    required: true,
    min: 0
  }
}));

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genre: Joi.string().required(),
    imdbRating: Joi.number().min(0).required(),
    personalRating: Joi.number().min(0).required()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie; 
exports.validate = validateMovie;
