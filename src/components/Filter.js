import React from 'react';
import '../stylesheets/Filter.scss';

function Filter(props) {
    // console.log(props)
    const handleSearch = (ev) => {
        // console.log(ev.target.value)
        const value = ev.target.value;
        props.handleSearch(value)
    }
    const handleFilterStatus = (ev) => {
        const value = ev.target.value;
        props.handleFilterStatus(value)
    }
    return (
        <form className="form">
            <div className="form-container-input">
                <label htmlFor="search" className="form-label">Find your character: </label>
                <input type="text" className="form-input" name="search" id="search" placeholder="Name of the character" value={props.search} onChange={handleSearch}></input>
            </div>
            <div className="form-container-select">
                <label htmlFor="status" className="select-label">Alive, Dead or Who Knows:</label>
                <select value={props.status} className="select-input" id="status" name="status" onChange={handleFilterStatus}>
                    <option value="">Select</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        </form>


    )
}

export default Filter;