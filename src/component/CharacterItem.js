import './characterItem.css'

function CharacterItem(props) {
    const {character, onCharacterOpenClick} = props;

    if (!character) {
        return(<div>Not found</div>)
    }

    return(
        <div className="character-item">
            <div className='character-photo'>
            <img src={character.photo} onClick={() => {onCharacterOpenClick(character)} }/>
            </div>
            <h4 className="tag-item" onClick={() => {onCharacterOpenClick(character)} } ><span>{character.no} </span>{character.name}</h4>
        </div>

    
    )
}

export default CharacterItem;