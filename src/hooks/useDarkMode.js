import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
//State----------------------------------------
const [darkMode, setDarkMode] = useLocalStorage('mode')
//Return
return [darkMode, setDarkMode]
}