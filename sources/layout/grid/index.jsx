import { css } from '@emotion/react'
import { Box } from '..'

export const Grid = (props) => {
	return (
		<Box
			xcss={{
				0: css`
					display: ${!props.display ? !props.item && 'grid' : typeof props.display === 'object' ? props.display[0] && props.display[0] : props.display};
					gap: ${!props.item && props.space && (typeof props.space === 'object' ? props.space[0] && (typeof props.space[0] === 'number' ? `${((1 / 10) * (props.space[0] * 4)).toFixed(1) + 'rem'}` : `${((1 / 10) * (props.space[0].split(' ')[0] * 4)).toFixed(1) + 'rem'} ${((1 / 10) * (props.space[0].split(' ')[1] * 4)).toFixed(1) + 'rem'}`) : typeof props.space === 'number' ? `${((1 / 10) * (props.space * 4)).toFixed(1) + 'rem'}` : `${((1 / 10) * (props.space.split(' ')[0] * 4)).toFixed(1) + 'rem'} ${((1 / 10) * (props.space.split(' ')[1] * 4)).toFixed(1) + 'rem'}`)};
					grid-template-columns: ${!props.item && props.columns && (typeof props.columns === 'object' ? props.columns[0] && (typeof props.columns[0] === 'number' ? `repeat(${props.columns[0]}, 1fr)` : props.columns[0]) : typeof props.columns === 'number' ? `repeat(${props.columns}, 1fr)` : props.columns)};
					grid-template-rows: ${!props.item && props.rows && (typeof props.rows === 'object' ? props.rows[0] && (typeof props.rows[0] === 'number' ? `repeat(${props.rows[0]}, 1fr)` : props.rows[0]) : typeof props.rows === 'number' ? `repeat(${props.rows}, 1fr)` : props.rows)};
					justify-items: ${!props.item && props.justify && (typeof props.justify === 'object' ? props.justify[0] && props.justify[0] : props.justify)};
					align-items: ${!props.item && props.align && (typeof props.align === 'object' ? props.align[0] && props.align[0] : props.align)};
					place-items: ${!props.item && props.place && (typeof props.place === 'object' ? props.place[0] && props.place[0] : props.place)};
					grid-column: ${props.item && props.column && (typeof props.column === 'object' ? props.column[0] && (typeof props.column[0] === 'number' ? `span ${props.column[0]}` : props.column[0]) : typeof props.column === 'number' ? `span ${props.column}` : props.column)};
					grid-row: ${props.item && props.row && (typeof props.row === 'object' ? props.row[0] && (typeof props.row[0] === 'number' ? `span ${props.row[0]}` : props.row[0]) : typeof props.row === 'number' ? `span ${props.row}` : props.row)};
					justify-self: ${props.item && props.justify && (typeof props.justify === 'object' ? props.justify[0] && props.justify[0] : props.justify)};
					align-self: ${props.item && props.align && (typeof props.align === 'object' ? props.align[0] && props.align[0] : props.align)};
					place-self: ${props.item && props.place && (typeof props.place === 'object' ? props.place[0] && props.place[0] : props.place)};
				`,

				1: css`
					display: ${props.display && typeof props.display === 'object' && props.display[1] && props.display[1]};
					gap: ${!props.item && props.space && typeof props.space === 'object' && props.space[1] && (typeof props.space[1] === 'number' ? `${((1 / 10) * (props.space[1] * 4)).toFixed(1) + 'rem'}` : `${((1 / 10) * (props.space[1].split(' ')[0] * 4)).toFixed(1) + 'rem'} ${((1 / 10) * (props.space[1].split(' ')[1] * 4)).toFixed(1) + 'rem'}`)};
					grid-template-columns: ${!props.item && props.columns && typeof props.columns === 'object' && props.columns[1] && (typeof props.columns[1] === 'number' ? `repeat(${props.columns[1]}, 1fr)` : props.columns[1])};
					grid-template-rows: ${!props.item && props.rows && typeof props.rows === 'object' && props.rows[1] && (typeof props.rows[1] === 'number' ? `repeat(${props.rows[1]}, 1fr)` : props.rows[1])};
					justify-items: ${!props.item && props.justify && typeof props.justify === 'object' && props.justify[1] && props.justify[1]};
					align-items: ${!props.item && props.align && typeof props.align === 'object' && props.align[1] && props.align[1]};
					place-items: ${!props.item && props.place && typeof props.place === 'object' && props.place[1] && props.place[1]};
					grid-column: ${props.item && props.column && typeof props.column === 'object' && props.column[1] && (typeof props.column[1] === 'number' ? `span ${props.column[1]}` : props.column[1])};
					grid-row: ${props.item && props.row && typeof props.row === 'object' && props.row[1] && (typeof props.row[1] === 'number' ? `span ${props.row[1]}` : props.row[1])};
					justify-self: ${props.item && props.justify && typeof props.justify === 'object' && props.justify[1] && props.justify[1]};
					align-self: ${props.item && props.align && typeof props.align === 'object' && props.align[1] && props.align[1]};
					place-self: ${props.item && props.place && typeof props.place === 'object' && props.place[1] && props.place[1]};
				`,

				2: css`
					display: ${props.display && typeof props.display === 'object' && props.display[2] && props.display[2]};
					gap: ${!props.item && props.space && typeof props.space === 'object' && props.space[2] && (typeof props.space[2] === 'number' ? `${((1 / 10) * (props.space[2] * 4)).toFixed(1) + 'rem'}` : `${((1 / 10) * (props.space[2].split(' ')[0] * 4)).toFixed(1) + 'rem'} ${((1 / 10) * (props.space[2].split(' ')[1] * 4)).toFixed(1) + 'rem'}`)};
					grid-template-columns: ${!props.item && props.columns && typeof props.columns === 'object' && props.columns[2] && (typeof props.columns[2] === 'number' ? `repeat(${props.columns[2]}, 1fr)` : props.columns[2])};
					grid-template-rows: ${!props.item && props.rows && typeof props.rows === 'object' && props.rows[2] && (typeof props.rows[2] === 'number' ? `repeat(${props.rows[2]}, 1fr)` : props.rows[2])};
					justify-items: ${!props.item && props.justify && typeof props.justify === 'object' && props.justify[2] && props.justify[2]};
					align-items: ${!props.item && props.align && typeof props.align === 'object' && props.align[2] && props.align[2]};
					place-items: ${!props.item && props.place && typeof props.place === 'object' && props.place[2] && props.place[2]};
					grid-column: ${props.item && props.column && typeof props.column === 'object' && props.column[2] && (typeof props.column[2] === 'number' ? `span ${props.column[2]}` : props.column[2])};
					grid-row: ${props.item && props.row && typeof props.row === 'object' && props.row[2] && (typeof props.row[2] === 'number' ? `span ${props.row[2]}` : props.row[2])};
					justify-self: ${props.item && props.justify && typeof props.justify === 'object' && props.justify[2] && props.justify[2]};
					align-self: ${props.item && props.align && typeof props.align === 'object' && props.align[2] && props.align[2]};
					place-self: ${props.item && props.place && typeof props.place === 'object' && props.place[2] && props.place[2]};
				`,

				3: css`
					display: ${props.display && typeof props.display === 'object' && props.display[3] && props.display[3]};
					gap: ${!props.item && props.space && typeof props.space === 'object' && props.space[3] && (typeof props.space[3] === 'number' ? `${((1 / 10) * (props.space[3] * 4)).toFixed(1) + 'rem'}` : `${((1 / 10) * (props.space[3].split(' ')[0] * 4)).toFixed(1) + 'rem'} ${((1 / 10) * (props.space[3].split(' ')[1] * 4)).toFixed(1) + 'rem'}`)};
					grid-template-columns: ${!props.item && props.columns && typeof props.columns === 'object' && props.columns[3] && (typeof props.columns[3] === 'number' ? `repeat(${props.columns[3]}, 1fr)` : props.columns[3])};
					grid-template-rows: ${!props.item && props.rows && typeof props.rows === 'object' && props.rows[3] && (typeof props.rows[3] === 'number' ? `repeat(${props.rows[3]}, 1fr)` : props.rows[3])};
					justify-items: ${!props.item && props.justify && typeof props.justify === 'object' && props.justify[3] && props.justify[3]};
					align-items: ${!props.item && props.align && typeof props.align === 'object' && props.align[3] && props.align[3]};
					place-items: ${!props.item && props.place && typeof props.place === 'object' && props.place[3] && props.place[3]};
					grid-column: ${props.item && props.column && typeof props.column === 'object' && props.column[3] && (typeof props.column[3] === 'number' ? `span ${props.column[3]}` : props.column[3])};
					grid-row: ${props.item && props.row && typeof props.row === 'object' && props.row[3] && (typeof props.row[3] === 'number' ? `span ${props.row[3]}` : props.row[3])};
					justify-self: ${props.item && props.justify && typeof props.justify === 'object' && props.justify[3] && props.justify[3]};
					align-self: ${props.item && props.align && typeof props.align === 'object' && props.align[3] && props.align[3]};
					place-self: ${props.item && props.place && typeof props.place === 'object' && props.place[3] && props.place[3]};
				`,

				4: css`
					display: ${props.display && typeof props.display === 'object' && props.display[4] && props.display[4]};
					gap: ${!props.item && props.space && typeof props.space === 'object' && props.space[4] && (typeof props.space[4] === 'number' ? `${((1 / 10) * (props.space[4] * 4)).toFixed(1) + 'rem'}` : `${((1 / 10) * (props.space[4].split(' ')[0] * 4)).toFixed(1) + 'rem'} ${((1 / 10) * (props.space[4].split(' ')[1] * 4)).toFixed(1) + 'rem'}`)};
					grid-template-columns: ${!props.item && props.columns && typeof props.columns === 'object' && props.columns[4] && (typeof props.columns[4] === 'number' ? `repeat(${props.columns[4]}, 1fr)` : props.columns[4])};
					grid-template-rows: ${!props.item && props.rows && typeof props.rows === 'object' && props.rows[4] && (typeof props.rows[4] === 'number' ? `repeat(${props.rows[4]}, 1fr)` : props.rows[4])};
					justify-items: ${!props.item && props.justify && typeof props.justify === 'object' && props.justify[4] && props.justify[4]};
					align-items: ${!props.item && props.align && typeof props.align === 'object' && props.align[4] && props.align[4]};
					place-items: ${!props.item && props.place && typeof props.place === 'object' && props.place[4] && props.place[4]};
					grid-column: ${props.item && props.column && typeof props.column === 'object' && props.column[4] && (typeof props.column[4] === 'number' ? `span ${props.column[4]}` : props.column[4])};
					grid-row: ${props.item && props.row && typeof props.row === 'object' && props.row[4] && (typeof props.row[4] === 'number' ? `span ${props.row[4]}` : props.row[4])};
					justify-self: ${props.item && props.justify && typeof props.justify === 'object' && props.justify[4] && props.justify[4]};
					align-self: ${props.item && props.align && typeof props.align === 'object' && props.align[4] && props.align[4]};
					place-self: ${props.item && props.place && typeof props.place === 'object' && props.place[4] && props.place[4]};
				`,

				5: css`
					display: ${props.display && typeof props.display === 'object' && props.display[5] && props.display[5]};
					gap: ${!props.item && props.space && typeof props.space === 'object' && props.space[5] && (typeof props.space[5] === 'number' ? `${((1 / 10) * (props.space[5] * 4)).toFixed(1) + 'rem'}` : `${((1 / 10) * (props.space[5].split(' ')[0] * 4)).toFixed(1) + 'rem'} ${((1 / 10) * (props.space[5].split(' ')[1] * 4)).toFixed(1) + 'rem'}`)};
					grid-template-columns: ${!props.item && props.columns && typeof props.columns === 'object' && props.columns[5] && (typeof props.columns[5] === 'number' ? `repeat(${props.columns[5]}, 1fr)` : props.columns[5])};
					grid-template-rows: ${!props.item && props.rows && typeof props.rows === 'object' && props.rows[5] && (typeof props.rows[5] === 'number' ? `repeat(${props.rows[5]}, 1fr)` : props.rows[5])};
					justify-items: ${!props.item && props.justify && typeof props.justify === 'object' && props.justify[5] && props.justify[5]};
					align-items: ${!props.item && props.align && typeof props.align === 'object' && props.align[5] && props.align[5]};
					place-items: ${!props.item && props.place && typeof props.place === 'object' && props.place[5] && props.place[5]};
					grid-column: ${props.item && props.column && typeof props.column === 'object' && props.column[5] && (typeof props.column[5] === 'number' ? `span ${props.column[5]}` : props.column[5])};
					grid-row: ${props.item && props.row && typeof props.row === 'object' && props.row[5] && (typeof props.row[5] === 'number' ? `span ${props.row[5]}` : props.row[5])};
					justify-self: ${props.item && props.justify && typeof props.justify === 'object' && props.justify[5] && props.justify[5]};
					align-self: ${props.item && props.align && typeof props.align === 'object' && props.align[5] && props.align[5]};
					place-self: ${props.item && props.place && typeof props.place === 'object' && props.place[5] && props.place[5]};
				`
			}}
			{...props}
		/>
	)
}
