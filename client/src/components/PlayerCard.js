import React from "react"
import styled from "styled-components"

const Card = styled.p`
    width: 80%;
    padding: 2%;
    margin: 4%;
    p {
        line-height: 1.5;
    }
    

`


const PlayerCard = (props) => {
    const {player, key, setPlayerRemember} = props

    const handleNewFave = (nameInput, countryInput) => {
        setPlayerRemember(`${nameInput} from ${countryInput}`)
    }

    return(
        <>
        <Card>
            <p><span>{player.name}</span> is a lovely player from <span>{player.country}</span>. <br/>They have been searched for <span>{player.searches}</span> times.</p>
            <button onClick = {setPlayerRemember(player.name, player.country)}>This one's my favorite</button>
        </Card>
        
        </>
    )
}

export default PlayerCard