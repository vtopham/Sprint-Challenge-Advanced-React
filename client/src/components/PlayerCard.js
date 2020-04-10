import React from "react"

const PlayerCard = (props) => {
    const {player} = props

    return(
        <>
        <p>{player.name} is a lovely player from {player.country}. They have been searched for {player.searches} times.</p>
        </>
    )
}

export default PlayerCard