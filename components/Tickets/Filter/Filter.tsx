import { FunctionComponent } from 'react'
import DropdownMenu from '../../Dropdown/dropdownMenu'
import DropdownToggler from '../../Dropdown/dropdownToggler'

// import { ReactComponent as CaretIcone} from '../../icons.caret.svg'
import styles from './Filter.module.css'

const Filter: FunctionComponent = () => {

	return (
		<div className={styles.filterDiv}>
			<p>Sort by : </p>
			<DropdownToggler>
				<DropdownMenu />
			</DropdownToggler>
		</div>
	)
}

export default Filter
