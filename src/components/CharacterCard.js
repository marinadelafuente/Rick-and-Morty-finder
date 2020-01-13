import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
    // console.log(props.character)
    const { image, name, species, id } = props.character;
    const routeId = `/character/${id}`;
    return (
        <React.Fragment>
            <li key={id}>
                <Link to={routeId}>
                    <img src={image}></img>
                    <p>Name:{name}</p>
                    <p>Species:{species}</p>
                </Link>
            </li>
        </React.Fragment >
    )
}

export default CharacterCard;