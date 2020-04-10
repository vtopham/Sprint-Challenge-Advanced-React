import React, {useEffect} from "react"
import PlayerCard from "./PlayerCard"


import {useFavoritePlayer} from "../hooks/useFavoritePlayer"

import styled from "styled-components"

const Results = styled.div`
    margin: 4%;


`
const DisplayPlayers = (props) => {
    const {playersArray} = props


    const [playerRemember, setPlayerRemember] = useFavoritePlayer("You don't have a favorite player, yet!");

    return(
        <>
        <h2>Please view all {playersArray.length} of our lovely players</h2>
        <div>
            <h3>Your favorite player is...</h3>
            <p>{playerRemember}</p>
        </div>
        <Results>
            {playersArray.map(player => { //loop through the array of players and produce a card per player
                return <PlayerCard key = {player.id} player = {player} setPlayerRemember = {setPlayerRemember}/>
            })}
        </Results>
        </>
    )
}

export default DisplayPlayers