import {useLocalStorage} from "./useLocalStorage"

export const useFavoritePlayer = playerInfo => {
    const [rememberPlayer, setRememberPlayer] = useLocalStorage("favePlayer", playerInfo)
    return [rememberPlayer, setRememberPlayer]
}