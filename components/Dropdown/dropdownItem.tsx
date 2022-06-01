import { FunctionComponent } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { sortByActions } from '../../store/sortBy'
import { displaySortBy } from '../../utils/sortDisplay'
import styles from './dropdown.module.css'

const DropdownItem: FunctionComponent<{ sort: string }> = ({ sort }) => {
	const currentSort = useAppSelector(state => state.sortBy)
	const dispatch = useAppDispatch()
	function handleClick() {
		dispatch(sortByActions.set(sort))
	}

	const sortDisplay = displaySortBy(sort)

	const activeClass = (currentSort === sort ) ? styles.active : ''

	return (
		<a className={`${styles.item} ${activeClass}`} onClick={handleClick}>
			<span>{sortDisplay}</span>
		</a>
	)
}

export default DropdownItem