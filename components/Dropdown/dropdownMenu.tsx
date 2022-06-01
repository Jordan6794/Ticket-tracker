import { FunctionComponent } from 'react'
import { QUERY_CREATED_AT, QUERY_LAST_UPDATED, QUERY_PRIORITY, QUERY_STATUS } from '../../utils/consts'

import styles from './dropdown.module.css'
import DropdownItem from './dropdownItem'

const DropdownMenu: FunctionComponent<{}> = () => {

	return (
		<div className={styles.dropdown}>
			<div className={styles.menu}>
				<DropdownItem sort={QUERY_CREATED_AT} />
				<DropdownItem sort={QUERY_LAST_UPDATED} />
                <DropdownItem sort={QUERY_STATUS} />
                <DropdownItem sort={QUERY_PRIORITY} />
			</div>
		</div>
	)
}

export default DropdownMenu