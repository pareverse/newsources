import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { Box } from '../../layout'
import { Spinner } from 'sources/core'

export const Button = forwardRef((props, ref) => {
	return (
		<Box
			as={props.as ? props.as : 'button'}
			ref={ref}
			css={css`
				background-color: ${props.transparent ? 'transparent' : props.outline ? 'transparent' : props.scheme ? `var(--${props.scheme}-500)` : 'var(--button-background)'};
				color: ${props.transparent ? 'var(--button-color)' : props.outline ? (props.scheme ? `var(--${props.scheme}-500)` : 'var(--button-color)') : props.scheme ? 'var(--white)' : 'var(--button-color)'};
				display: flex;
				gap: ${props.size ? (props.size === 'xs' ? '0.6rem' : props.size === 'sm' ? '0.7rem' : props.size === 'md' ? '0.8rem' : props.size == 'lg' ? '1rem' : props.size === 'xl' && '1.2rem') : '0.7rem'};
				justify-content: center;
				align-items: center;
				outline: ${props.outline && (props.scheme ? `1px solid var(--${props.scheme}-500)` : '1px solid var(--button-outline)')};
				padding: ${props.size ? (props.size === 'xs' ? (props.children ? '0.9rem 1.2rem' : '1rem') : props.size === 'sm' ? (props.children ? '0.95rem 1.4rem' : '1rem') : props.size === 'md' ? (props.children ? '1rem 1.6rem' : '1rem') : props.size == 'lg' ? (props.children ? '0.9rem 2rem' : '1rem') : props.size === 'xl' && (props.children ? '0.8rem 2.4rem' : '1rem')) : props.children ? '0.95rem 1.2rem' : '1rem'};
				border-radius: 4px;
				width: ${props.maxed && '100%'};
				font-size: ${props.size ? (props.size === 'xs' ? '1.2rem' : props.size === 'sm' ? '1.4rem' : props.size === 'md' ? '1.6rem' : props.size == 'lg' ? '2rem' : props.size === 'xl' && '2.4rem') : '1.4rem'};
				font-weight: ${props.size ? (props.size === 'xs' ? '500' : props.size === 'sm' ? '500' : props.size === 'md' ? '600' : props.size == 'lg' ? '600' : props.size === 'xl' && '600') : '500'};
				cursor: ${props.isLoading ? 'not-allowed' : 'pointer'};
				box-shadow: ${props.shadow && props.scheme && `var(--${props.scheme}-500) 0 4px 12px 0`};
				transition: 0.2s;

				${!props.isLoading &&
				css`
					&:active {
						background-color: ${props.transparent ? props.scheme && `var(--${props.scheme}-alpha-50)` : props.outline ? (props.scheme ? `var(--${props.scheme}-alpha-50)` : 'var(--gray-alpha-50)') : props.scheme ? `var(--${props.scheme}-600)` : 'var(--gray-alpha-50)'};
						color: ${props.transparent && props.scheme && `var(--${props.scheme}-500)`};
					}
				`}
			`}
			disabled={props.isLoading}
			{...props}
		>
			{props.isLoading ? <Spinner /> : props.icon && props.icon}
			{props.isLoading && props.text ? props.text : props.children}
		</Box>
	)
})
