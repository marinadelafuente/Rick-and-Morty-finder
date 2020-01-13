import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';


function CharacterCard(props) {
    // console.log(props.character)
    const { image, name, species, id } = props.character;
    const routeId = `/character/${id}`;
    return (
        <React.Fragment>
            <li key={id} className="list__item">
                <Link to={routeId}>
                    <img src={image} alt={name} className="list__item-image"></img>
                    <p className="list__item-name">{name.toUpperCase()}</p>
                    <p className="list__item-species">{species}</p>
                </Link>
            </li>
        </React.Fragment >
    )
}

export default CharacterCard;