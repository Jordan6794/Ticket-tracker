import { FunctionComponent } from 'react'

import { useAppDispatch } from '../../hooks'
import { displaySortBy } from '../../shared/utils'
import { sortByActions } from '../../store/sortBy'
import styles from './dropdown.module.css'

const DropdownItem: FunctionComponent<{ sort: string }> = ({ sort }) => {
	const dispatch = useAppDispatch()
	function handleClick() {
		dispatch(sortByActions.set(sort))
	}

	const sortDisplay = displaySortBy(sort)

	return (
		<a className={styles.item} onClick={handleClick}>
			<span>{sortDisplay}</span>
		</a>
	)
}

export default DropdownItem
