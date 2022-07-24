export const DataScript = () => {
	const colorScheme = `
		const colorScheme = () => {
			if (window.localStorage.getItem('theme')) return window.localStorage.getItem('theme')

			return window.localStorage.setItem('theme', 'light')
		}

		document.documentElement.dataset.theme = colorScheme()
	`

	return <script dangerouslySetInnerHTML={{ __html: colorScheme }} />
}
