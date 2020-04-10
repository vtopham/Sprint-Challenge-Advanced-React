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
            {playersArray.map(player => {
                return <PlayerCard player = {player}/>
            })}
        </Results>
        </>
    )
}

export default DisplayPlayers