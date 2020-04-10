import {useLocalStorage} from "./useLocalStorage"


export const useColorMode = colorClass => {
    const [colorMode, setColorMode] = useLocalStorage("colorMode", colorClass)
    return [colorMode, setColorMode]
}