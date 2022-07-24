import { css } from '@emotion/react'
import { Box } from '..'

export const Stack = (props) => {
	return (
		<Box
			css={css`
				display: flex;
				gap: ${((1 / 10) * props.space * 4).toFixed(1) + 'rem'};
				flex-direction: ${props.vertical ? 'column' : 'row'};
				justify-content: flex-start;
				align-items: flex-start;
			`}
			{...props}
		/>
	)
}
