import React from 'react';

function Filter(props) {
    console.log(props)
    const handleSearch = (ev) => {
        console.log(ev.target.value)
        const value = ev.target.value;
        props.handleSearch(value)
    }
    const handleFilterStatus = (ev) => {
        const value = ev.target.value;
        props.handleFilterStatus(value)
    }
    return (
        <form>
            <label htmlFor="search">Find you character </label>
            <input type="text" name="search" id="search" placeholder="Name of the character" onChange={handleSearch}></input>
            <label htmlFor="status">Alive, Dead or Who Knows:</label>
            <select value={props.status} id="status" name="status" onChange={handleFilterStatus}>
                <option value="Select">Select</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>

            </select>
        </form>


    )
}

export default Filter;