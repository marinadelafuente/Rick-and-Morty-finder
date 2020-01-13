import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../stylesheets/App.scss';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filter from './Filter';
import FetchCharacters from '../services/fetchCharacter'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: "",
    }
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
  }

  componentDidMount() {
    FetchCharacters()
      .then(characters => {
        this.setState({ characters })
      })
  };

  handleSearch(dataValue) {
    console.log(dataValue);
    this.setState({ search: dataValue })
  }

  filterCharacters() {
    return this.state.characters
      .filter((character) => {
        console.log(character.status)
        return character.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
  }

  renderCharacterDetail(props) {
    const routeId = parseInt(props.match.params.id);
    // console.log(props)
    // console.log(this.state.characters, routeId);
    const character = this.state.characters.find((character) => {
      console.log(character.id, routeId);
      return character.id === routeId;
    })
    if (!character) {
      return <p>Tu personaje no existe en este universo...</p>
    }
    else {
      return <CharacterDetail character={character} />
    }
  }

  render() {
    console.log(this.state.status)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Filter handleSearch={this.handleSearch}
              handleFilterStatus={this.handleFilterStatus}
              status={this.state.status}
            />
            <CharacterList characters={this.filterCharacters()}
            />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
