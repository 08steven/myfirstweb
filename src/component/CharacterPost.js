import './characterPost.css'
import characters from '../data/character';


function characterPost(props) {
    const { selectedCharacter,onCharacterCloseClick } = props;
    return (
        <div className='character-post'>
                <div className='character-post-bg' onClick={onCharacterCloseClick}/>
                <img src={selectedCharacter.photo} />
                <div className='character-post-content'>
                    <h2>Biography</h2>
                    <br/>
                    <br/>
                    <br/>
                    <h4>Name : {selectedCharacter.name}</h4>
                    <br/>
                    <h4>No : {selectedCharacter.no}</h4>
                    <br/>
                    <h4>Position : {selectedCharacter.position}</h4>
                    <br/>
                    <h4>Date of birth : {selectedCharacter.dateOfBirth}</h4>
                    <br/>
                    <h4>Place of birth : {selectedCharacter.placeOfBirth}</h4>
                    <br/>
                    <h4>Height : {selectedCharacter.height}</h4>
                    <br/>
                    <h4>Preferred Foot : {selectedCharacter.preferredFoot}</h4>
                    <br/>
                    <h4>Strength : {selectedCharacter.strengths}</h4>
                    <br/>
                    <h4>Weaknesses : {selectedCharacter.weaknesses}</h4>
                </div>
        </div>
    )

}

export default characterPost;