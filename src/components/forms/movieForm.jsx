import React from 'react';
import Form from "../common/form";
import Joi from "joi-browser";

class MovieForm extends Form {


    //region state -->  data: {title,genreId,numberInStock,dailyRentalrate },genres=[],errors={}
    constructor(props, context) {

        super(props, context);
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
        numberInStock: Joi.number.required().min(0).max(100).label("Number In Stock"),
        dailyRentalRate: Joi.number.required().min(0).max(10).label("Daily Rental Rate"),

    }
    //endregion
    //region componentDidmount --> will set genres state, allow the edit or delete movies based on user input

    //endregion
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default MovieForm;