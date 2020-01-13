import React from 'react';
import '../stylesheets/Filter.scss';

function Filter(props) {
    console.log(props)
    const handleSearch = (ev) => {
        console.log(ev.target.value)
        const value = ev.target.value;
        props.handleSearch(value)
    }
    return (
        <form className="form">
            <label htmlFor="search" className="form-label">Find your character: </label>
            <input type="text" className="form-input" name="search" id="search" placeholder="Name of the character" onChange={handleSearch}></input>
        </form>
    )
}

export default Filter;