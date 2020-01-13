import React from 'react';
import { Link } from 'react-router-dom'

function CharacterDetail(props) {
    console.log(props)
    const { image, name, species, origin, episode, status } = props.character;
    console.log(props.character.name)
    return (
        <React.Fragment>
            <div>
                <img className="character__img" src={image} alt={name}></img>
                <h3>My name is {name}</h3>
                <p>I am
                    {species === "Alien"
                        ? <span> an {species} <i className={"fab fa-reddit-alien"}></i></span>
                        : <span> {species} <i className={"fas fa-baby"}></i></span>
                    }
                </p>
                <p>I am from {origin.name === "unknown"
                    ? <span>somewhere in the universe</span>
                    : <span>{origin.name}</span>}
                </p>
                <p>I appear in {episode.length} episode(s)</p>
                <p>Alive, Dead or Who Knows:  {status === "Dead"
                    ? <span><i className={"fas fa-book-dead"}></i></span>
                    : <span>{status}</span>}
                </p>
            </div>
            <Link to={'/'}>
                < button > Return to Characters</button>
            </Link>
        </React.Fragment >
    )
}

export default CharacterDetail;