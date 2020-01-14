import React from 'react';
import { Link } from 'react-router-dom'
import '../stylesheets/CharacterDetail.scss';

function CharacterDetail(props) {
    // console.log(props)
    const { image, name, species, origin, episode, status } = props.character;
    // console.log(props.character.name)
    let statusNew;
    if (status === "Dead") {
        statusNew = <i className={"fas fa-skull-crossbones"}></i>
    }
    else if (status === "unknown") {
        statusNew = <p className="character__text">Am I alive?? <span className="icon">🤷‍♀️</span></p>
    }
    else {
        statusNew = <p className="character__text">I am {status.toUpperCase()}!!! <i class="fas fa-walking"></i> <i class="fas fa-child"></i> <i class="fas fa-walking"></i></p>
    };

    return (
        <React.Fragment>
            <div className="character__card-container">
                <Link to={'/'}>
                    < button className="button-return"> Return to Characters</button>
                </Link>
                <div className="character__container">
                    <img className="character__img" src={image} alt={name}></img>
                    <div className="character__container-text">
                        <h3 className="character__title">{name.toUpperCase()}</h3>
                        <p className="character__text">I am
                    {species === "Alien"
                                ? <span className="character__text"> an <i className={"fab fa-reddit-alien"}></i> ({species}) </span>
                                : <span className="character__text"> {species} 🤓</span>
                            }
                        </p>
                        <p className="character__text">I am from {origin.name === "unknown"
                            ? <span className="character__text">somewhere in the universe</span>
                            : <span className="character__text">{origin.name}</span>}
                        </p>
                        <p className="character__text">I appear in {episode.length} episode(s)</p>
                        {statusNew}
                        {/* <p className="character__text">I am {status === "Dead"
                            ? <span className="character__text"><i className={"fas fa-skull-crossbones"}></i></span>
                            : <span className="character__text">{status}!</span>}
                        </p> */}
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default CharacterDetail;