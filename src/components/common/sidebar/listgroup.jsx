import React from 'react';


const ListGroup = ({items, textProperty, valueProperty, onItemSelect, selectedItem}) => {

    // const ListGroup = ({items, textProperty, valueProperty, onItemSelect, selectedItem})--> region comment and explanation
    /*
    items --> array of items this case all the movies genre
    textProperty--> passed in as string to use dynamically
    valueProperty--> passed in as string again dynamically
    selectedItem --> by default is all Movies
    <li onClick={() => onItemSelect(item)} key={item[valueProperty]} --> by using item[valueProperty] peroeprty of name and id is being acessed
    ListGroup.defaultProps = {
    textProperty: 'name',--> name has been set
    valueProperty: '_id' // id is set
}


     */

    //endregion


    return (
        <ul className="list-group mt-1">
            {items.map(item => // looping through all the categories
                <li onClick={() => onItemSelect(item)}  // with click each category will chagne.
                    key={item[valueProperty]} // this is they key for item using default props to acess value
                    className={item === selectedItem ? `list-group-item active` : `list-group-item`}> {/*this checkes whther or not current item is selected.  */}
                    {item[textProperty]}</li>)}
        </ul>


    );

};
    // region default props --> setting the default property for textProperty and value property
ListGroup.defaultProps = {
    textProperty: 'name', // deefault props is being set here this gives it dynamic optins
    valueProperty: '_id'
    /*by using textProperty and valueProperty it makes the program decouples and any value can be used*/
}
//endregion
export default ListGroup;

