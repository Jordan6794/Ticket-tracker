import { FunctionComponent } from 'react'
import { QUERIES } from '../../utils/consts'

import styles from './dropdown.module.css'
import DropdownItem from './dropdownItem'

const DropdownMenu: FunctionComponent<{}> = () => {

	const queriesItems = QUERIES.map((query, index) => <DropdownItem key={index} sort={query} />)

	return (
		<div className={styles.dropdown}>
			<div className={styles.menu}>
				{queriesItems}
			</div>
		</div>
	)
}

export default DropdownMenu