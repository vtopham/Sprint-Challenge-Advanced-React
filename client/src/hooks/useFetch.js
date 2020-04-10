import React, {useEffect} from "react"
import axios from "axios"

export const useFetch = (url, stateSetter, key) => {

    useEffect(() => {
        axios.get(`${url}`)
        .then(response => {
            stateSetter({
                [key]: response.data
            })
        })
    })

}

//THIS WOULD BE USED IF APP WAS A FUNCTIONAL COMPONENT