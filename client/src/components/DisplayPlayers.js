import React from "react"
import PlayerCard from "./PlayerCard"

import styled from "styled-components"

const Results = styled.div`
    margin: 4%;


`
const DisplayPlayers = (props) => {
    const {playersArray} = props

    return(
        <>
        <h2>Please view all {playersArray.length} of our lovely players</h2>
        <Results>
            {playersArray.map(player => { //loop through the array of players and produce a card per player
                return <PlayerCard id = {player.id} player = {player}/>
            })}
        </Results>
        </>
    )
}

export default DisplayPlayers