const apiData = "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

const fetchCharacter = () => fetch(apiData)
    .then(response => response.json())
    .then(characters => characters.results)

export default fetchCharacter;