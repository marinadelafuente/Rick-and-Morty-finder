import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
    // console.log(props)
    const { characters } = props;
    console.log(characters)
    return (
        < ul >
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