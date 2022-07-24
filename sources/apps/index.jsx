import { useState, useEffect, createContext } from 'react'
import { Global } from '@emotion/react'
import { normalize } from '../system'

export const App = createContext()

export const AppProvider = ({ children }) => {
	const [colorScheme, setColorScheme] = useState(typeof window !== 'undefined' && window.localStorage.getItem('theme'))

	const toggleColorScheme = () => (colorScheme === 'light' ? setColorScheme('night') : setColorScheme('light'))

	useEffect(() => {
		document.documentElement.dataset.theme = colorScheme
		window.localStorage.setItem('theme', colorScheme)
	}, [colorScheme])

	return (
		<App.Provider value={{ toggleColorScheme }}>
			<Global styles={normalize} />
			{children}
		</App.Provider>
	)
}
