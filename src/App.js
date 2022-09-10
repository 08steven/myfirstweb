import './App.css'
import NavBar from './component/NavBar'
import { useState } from "react"
import CharacterPost from "./component/CharacterPost"
import MainSection from './component/MainSection'
import CharacterItem from './component/CharacterItem'
import characters from './data/character'

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onCharacterOpenClick(theCharacter) {
    setSelectedCharacter(theCharacter);
  }

  function onCharacterCloseClick() {
    setSelectedCharacter(null);
  }

  const character = characters.find(element => element.name === searchText)

  return (
    <div className='app'>
      <div>
        <NavBar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div>
        {searchText ?
        <div className='search-container'>
          <CharacterItem character={character} onCharacterOpenClick={onCharacterOpenClick} /> 
          </div>:
          <MainSection onCharacterOpenClick={onCharacterOpenClick} searchText={searchText} />}
      </div>


      {selectedCharacter && <CharacterPost selectedCharacter={selectedCharacter} onCharacterCloseClick={onCharacterCloseClick} />}



    </div>
  );
}

export default App;
