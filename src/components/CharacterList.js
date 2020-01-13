import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.scss';

function CharacterList(props) {
    // console.log(props)
    const { characters } = props;
    console.log(characters)
    return (
        < ul className="list__wrapper">
            {characters.map((character) => {
                return <CharacterCard
                    key={character.id}
                    character={character}
                />
            })}
        </ul >
    )
};

export default CharacterList;