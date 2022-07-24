import { css, keyframes } from '@emotion/react'
import { Box } from '../../layout'

const spin = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

export const Spinner = (props) => {
	return (
		<Box
			css={css`
				border: 2px solid currentColor;
				border-top-color: transparent;
				border-radius: 50px;
				height: 20px;
				width: 20px;
				animation: ${spin} 0.4s ease-in infinite;
			`}
			{...props}
		/>
	)
}
