import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {useColorMode} from "../hooks/useColorMode"

const ButtonHolder = styled.div`
        display: flex;

        button {
            padding: 2%;
            margin: 2%;
            border: none;
            border-radius: 10px;
            color: white;
        }

        .red {
            background: tomato;
        }

        .blue {
            background: dodgerblue;
        }
    `
const ColorPicker = _ => {

    const [colorMode, setColorMode] = useColorMode("dodgerblue-theme")
    const setRedMode = event => {
        event.preventDefault()
        setColorMode("tomato-theme")
    }

    const setBlueMode = event => {
        event.preventDefault()
        setColorMode("dodgerblue-theme")
    }

    useEffect ( _ => {
        const spanList = document.getElementsByTagName("span")
        
        Array.from(spanList).map(element => {
            element.classList.remove("dodgerblue-theme")
            element.classList.remove("tomato-theme")
            element.classList.add(`${colorMode}`)
            console.log(element.classList)
        })
        
    })



    return(
        <ButtonHolder> 
            <button 
                className = "red" 
                onClick = {setRedMode} 
                >I like red</button>
            <button 
                className = "blue" 
                onClick = {setBlueMode}
                >I like blue</button>
        </ButtonHolder>
    )
}

export default ColorPicker