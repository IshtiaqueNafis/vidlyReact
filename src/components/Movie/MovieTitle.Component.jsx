import React from 'react';
import Button from "../UI/Button.UI.Jsx";
import Like from "../common/Like.Component";

const MovieTitle = (props) => {
    const {genre, _id, numberInStock, title, dailyRentalRate,liked} = props.movie;
    const onDelete = ()=>{
               props.onDelete(props.movie)
        }

    const onLike = () =>{
       props.onLike(props.movie)
    }
        return (
            <tr className='table-info'>

                    <td>{title}</td>
                    <td>{genre.name}</td>
                    <td>{numberInStock}</td>
                    <td>{dailyRentalRate}</td>
                    <td><Like liked={liked} onLike={onLike}/></td>
                    <Button onDelete={onDelete} movie={props.movie} buttonType='btn btn-danger'>Delete</Button>


            </tr>
        );
};

export default MovieTitle;