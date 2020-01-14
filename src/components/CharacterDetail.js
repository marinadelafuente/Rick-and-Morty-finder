import React from 'react';
import { Link } from 'react-router-dom'
import '../stylesheets/CharacterDetail.scss';

function CharacterDetail(props) {
    // console.log(props)
    const { image, name, species, origin, episode, status } = props.character;
    // console.log(props.character.name)
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
                                ? <span className="character__text"> an {species} <i className={"fab fa-reddit-alien"}></i></span>
                                : <span className="character__text"> {species} <i className={"fas fa-baby"}></i></span>
                            }
                        </p>
                        <p className="character__text">I am from {origin.name === "unknown"
                            ? <span className="character__text">somewhere in the universe</span>
                            : <span className="character__text">{origin.name}</span>}
                        </p>
                        <p className="character__text">I appear in {episode.length} episode(s)</p>
                        <p className="character__text">I am {status === "Dead"
                            ? <span className="character__text"><i className={"fas fa-skull-crossbones"}></i></span>
                            : <span className="character__text">{status}!</span>}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default CharacterDetail;