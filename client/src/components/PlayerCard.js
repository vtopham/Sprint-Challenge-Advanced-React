import React from "react"
import styled from "styled-components"

const Card = styled.p`
    width: 80%;
    padding: 2%;
    margin: 4%;
    line-height: 1.5;

    span {
        
    }

`
const PlayerCard = (props) => {
    const {player, key} = props

    return(
        <>
        <Card><span>{player.name}</span> is a lovely player from <span>{player.country}</span>. <br/>They have been searched for <span>{player.searches}</span> times.</Card>
        </>
    )
}

export default PlayerCard