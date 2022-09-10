import CharacterItem from './CharacterItem'
import characters from '../data/character'
import './mainSection.css'


function MainSection(props) {
    const {onCharacterOpenClick} = props;

    const characterElementByPosition = (position) =>
    characters.filter(character =>
      character.position.startsWith(position) //(character.name === searchText || !searchText)
    ).map((character, index) =>
      <CharacterItem key={index} character={character} onCharacterOpenClick={onCharacterOpenClick} />
    )

    return (
        <div>
            <div className="header-section">
                <h4>Forward</h4>
            </div>
            <div className="app-flex">
                {characterElementByPosition('F')}
            </div>
            <div className="header-section-2">
                <h4>Midfielder</h4>
            </div>
            <div className="app-flex">
                {characterElementByPosition('M')}
            </div>
            <div className="header-section-2">
                <h4>Defender</h4>
            </div>
            <div className="app-flex">
                {characterElementByPosition('D')}
            </div>
            <div className="header-section-2">
                <h4>Goalkeeper</h4>
            </div>
            <div className="app-flex">
                {characterElementByPosition('G')}
            </div>
        </div>
    )
}

export default MainSection;