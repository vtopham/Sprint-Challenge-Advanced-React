import React, {useEffect} from "react"

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

