import React, {useEffect, useState} from "react"
import PlayerCard from "./PlayerCard"


import {useFavoritePlayer} from "../hooks/useFavoritePlayer"

import styled from "styled-components"

const Results = styled.div`
    margin: 4%;


`
const DisplayPlayers = (props) => {
    const {playersArray} = props


    const [playerRemember, setPlayerRemember] = useFavoritePlayer("You don't have a favorite player, yet!");
    const [faveInput, setFaveInput] = useState("");


    const handlePlayerInput = (event) => { //save input typed to state
        event.preventDefault()
        setFaveInput(event.target.value)
    }
    const handleFavePlayer = (event) => { //when they click the button, send state to localstorage and reset
        event.preventDefault()
        setPlayerRemember(faveInput)
        setFaveInput("")
        
    }
    return(
        <>
        <h2>Please view all {playersArray.length} of our lovely players</h2>
        <div>
            <label htmlFor = "faveName">Type in the name of your favorite player here so we'll remember it!</label>
            <input type = "text" id="faveName" onChange = {handlePlayerInput} value = {faveInput}/>
            <button onClick = {handleFavePlayer}>Update favorite player</button>

            <h4>Your current favorite player is...</h4>
            <p>{playerRemember}</p>
        </div>
        <Results>
            {playersArray.map(player => { //loop through the array of players and produce a card per player
                return <PlayerCard key = {player.id} player = {player}/>
            })}
        </Results>
        </>
    )
}

export default DisplayPlayers