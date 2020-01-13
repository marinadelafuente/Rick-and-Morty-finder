import React from 'react';

function Filter(props) {
    console.log(props)
    const handleSearch = (ev) => {
        console.log(ev.target.value)
        const value = ev.target.value;
        props.handleSearch(value)
    }
    return (
        <form>
            <label htmlFor="search">Find you character </label>
            <input type="text" name="search" id="search" placeholder="Name of the character" onChange={handleSearch}></input>
        </form>
    )
}

export default Filter;