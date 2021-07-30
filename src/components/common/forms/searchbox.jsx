import React from 'react';

const SearchBox = ({value,onChange}) => (
    <input
    type="text" // whats the type will be for the input
    name='query' // name of the property being passed
    className="form-control my-3"
    placeholder="search..."
    value = {value} // what will the value will be
    onChange={e => onChange(e.currentTarget.value)} // e is the event and getting value from there.
    />
);

export default SearchBox;