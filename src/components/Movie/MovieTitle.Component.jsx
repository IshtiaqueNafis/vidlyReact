import React from 'react';
import Button from "../UI/Button.UI.Jsx";

const MovieTitle = (props) => {
    const {genre, _id, numberInStock, title, dailyRentalRate} = props.movie;
    const onDelete = ()=>{
               props.onDelete(props.movie)
        }
        return (
            <tr className='table-info'>

                    <td>{title}</td>
                    <td>{genre.name}</td>
                    <td>{numberInStock}</td>
                    <td>{dailyRentalRate}</td>
                    <Button onDelete={onDelete} movie={props.movie} buttonType='btn btn-danger'>Delete</Button>


            </tr>
        );
};

export default MovieTitle;