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

    const handleFilterGender = (ev) => {
        const value = ev.target.value;
        props.handleFilterGender(value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-container-search">
                <label htmlFor="search" className="search-label">Find your character: </label>
                <input type="text" className="search-input" name="search" id="search" placeholder="Name of the character" value={props.search} onChange={handleSearch}></input>
            </div>
            <div className="form-container-select">
                <label htmlFor="status" className="select-label">Alive, Dead or Who Knows:</label>
                <select value={props.status} className="select-input" id="status" name="status" onChange={handleFilterStatus}>
                    <option value="">Select</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Who Knows</option>
                </select>
            </div>
            <div className="form-container-radio">
                <label htmlFor="status" className="radio-title">Gender: </label>
                <label htmlFor="status" className="radio-label">All: </label>
                <input
                    onChange={handleFilterGender}
                    className="radio-input"
                    type="radio" name="gender" checked={props.gender === ""} value="" />

                <label htmlFor="status" className="radio-label">Male: </label>
                <input
                    onChange={handleFilterGender}
                    className="radio-input"
                    type="radio" name="gender" checked={props.gender === "Male"} value="Male" />

                <label htmlFor="status" className="radio-label">Female: </label>
                <input
                    onChange={handleFilterGender}
                    className="radio-input"
                    type="radio" name="gender" checked={props.gender === "Female"} value="Female" />

                <label htmlFor="status" className="radio-label">Unknown: </label>
                <input
                    onChange={handleFilterGender}
                    className="radio-input"
                    type="radio" name="gender" checked={props.gender === "unknown"} value="unknown" />
            </div>
        </form>


    )
}

export default Filter;