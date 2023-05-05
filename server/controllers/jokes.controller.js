const Joke = require('../models/jokes.model');

module.exports = {
    
    //Create
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke=> res.json(newJoke))
            .catch(err => res.json(err));
    },
    
    //Read all
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => res.json(err));
    },
    
    //Read one
    getOneJoke: (req, res) => {
        Joke.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err));
    },

    //Update
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err));
    },

    //Delete
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
    
}