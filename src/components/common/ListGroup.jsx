import React from 'react';

const ListGroup = (props) => {
    const {items, textProperty, valueProperty, onItemSelect, selectedItem} = props;
    return (

        <ul className="list-group bg-dark mt-3 clickable">
            {items.map(item => <li onClick={() => onItemSelect(item)} key={item[valueProperty]}
                                   className={item===selectedItem?'list-group-item active':'list-group-item'}>{item[textProperty]}</li>)}
            {/*this makes it so so theat no matter what keys are dybamic and the component can be used anywgere   */}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}
export default ListGroup;