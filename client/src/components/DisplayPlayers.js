import React from "react"
import PlayerCard from "./PlayerCard"

const DisplayPlayers = (props) => {
    const {playersArray} = props

    return(
        <>
        <h2>Please view all {playersArray.length} of our lovely players</h2>
        {playersArray.map(player => {
            return <PlayerCard player = {player}/>
        })}

        </>
    )
}

export default DisplayPlayers