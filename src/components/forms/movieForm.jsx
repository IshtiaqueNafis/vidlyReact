import React from 'react';
import Form from "../common/form";
import Joi from "joi-browser";
import {getGenres} from "../../Starter Code/services/fakeGenreService";
import {getMovie, saveMovie} from "../../Starter Code/services/fakeMovieService";

class MovieForm extends Form {


    //region state -->  data: {title,genreId,numberInStock,dailyRentalrate },genres=[],errors={}
    constructor(props, context) {

        super();
        this.state = {
            data: {
                title: '', // --> is for the movie title
                genreId: '', //--> genreId is used as a foregin key for genre
                numberInStock: '', // check the stock of the movie
                dailyRentalRate: "" // check the daily rental rate
                // each keys and values matches the array.
            },
            genres: [], //-> will hold all the gernes
            errors: {} //->error will stay here.

        }
    }

    //endregion

    //region schema --> _id,title,genreId,numberInStock,dailyRentalRate
    schema = {
        _id: Joi.string(), // this is the movieId,
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label("Number In Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),

    }
    //endregion

    //region componentDidmount --> will set genres state, allow the edit or delete movies based on user input
    componentDidMount() {
        const genres = getGenres(); // --> getting genre from genres
        this.setState({genres}); // thjis is setting the states

        const movieId = this.props.match.params.id; //this checks the movieId from the parameter
        if (movieId === 'new') return; //if the parameter is new means

        const movie = getMovie(movieId); // --> get the movies based on Id
        if (!movie) return this.props.history.replace('/not-found') //if movieId does not exist means there is no movie so this willb e show

        this.setState({data: this.mapToViewModel(movie)}); // this sets the data for the movie
    }

    //endregion

    //region methods--> [ mapToViewModel(),doSubmit()]

    //region mapToViewModel --> maps movie to an movieobject
    mapToViewModel = (movie) => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }
    //endregion

    //region  doSubmit -->  saves the data for the movie and redirects
    doSubmit = () => {
        saveMovie(this.state.data); // saves movie
        this.props.history.push("/movies");  // pushes movie.
    }
    //endregion.

    //endregion

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                {this.renderInput('title', 'Title')}
                {this.renderSelect('genreId','Genre',this.state.genres)}
                {this.renderInput('numberInStock', 'Number in Stock', 'number')}
                {this.renderInput('dailyRentalRate', 'Rate', 'number')}
                {this.renderButton("Save")}


            </div>
        );
    }
}

export default MovieForm;