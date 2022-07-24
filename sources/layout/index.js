import isPropValid from '@emotion/is-prop-valid'
import { breakpoints } from '../system'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ignore = ['background', 'color', 'position', 'display']

const styles = (props) => css`
	${props.xcss && props.xcss[0] ? props.xcss[0] : props.xcss}
	${props.css && props.css[0] ? props.css[0] : props.css}

	${breakpoints.map(
		(value, index) => css`
			@media (min-width: ${value}em) {
				${props.xcss && props.xcss[index + 1] && props.xcss[index + 1]}
				${props.css && props.css[index + 1] && props.css[index + 1]}
			}
		`
	)}
`

export const Box = styled('div', { shouldForwardProp: (props) => isPropValid(props) && !ignore.includes(props) })(styles)

export * from './grid'
export * from './stack'
export * from './view'
