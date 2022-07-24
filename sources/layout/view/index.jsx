import { breakpoints } from '../../system'
import { css } from '@emotion/react'
import { Box } from '..'

export const View = (props) => {
	return (
		<Box
			xcss={{
				0: css`
					background-color: ${props.background && `var(--${props.background})`};
					color: ${props.color && `var(--${props.color})`};
					position: ${props.main && 'relative'};
					margin: ${props.main && '0 auto'};
					padding: ${props.main && '0 2.4rem'};
					width: ${props.main && '100%'};
				`,

				1: css`
					max-width: ${props.main && `${breakpoints[0]}em`};
				`,

				2: css`
					max-width: ${props.main && `${breakpoints[1]}em`};
				`,

				3: css`
					max-width: ${props.main && `${breakpoints[2]}em`};
				`,

				4: css`
					max-width: ${props.main && `${breakpoints[3]}em`};
				`,

				5: css`
					max-width: ${props.main && `${breakpoints[4]}em`};
				`
			}}
			{...props}
		/>
	)
}
