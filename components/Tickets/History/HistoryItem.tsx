import { FunctionComponent } from 'react'
import { getTimeAgo } from '../../../utils/date.util'
import { trimChanges } from '../../../utils/ticketChanges.util'
import { TicketChanges } from '../tickets.model'

import { ChangeType, History } from './history.model'

import styles from './History.module.css'

const TicketsHistory: FunctionComponent<{historyElement: History}> = ({historyElement}) => {

	let actionText = ''
	switch (historyElement.change.change_type) {
		case ChangeType.New:
			actionText = 'created'
			break
		case ChangeType.Delete:
			actionText = 'deleted'
			break
		case ChangeType.Update:
			actionText = 'updated'
			break
		case ChangeType.Reply:
			actionText = 'replied to'
			break
	}

    let updates: null | string[] = null
    if(historyElement.change.change_type === ChangeType.Update && historyElement.change.changes){
        const trimmedChanges = trimChanges(historyElement.change.changes)
        updates = Object.keys(trimmedChanges).map((key) =>{
            const typedKey = key as keyof TicketChanges
            //capitalizing the first letter as it will be in the begining of a sentence
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1)
            return `${capitalizedKey} set to ${trimmedChanges[typedKey]}`
        })
    }
    

	const timeAgo = getTimeAgo(new Date(historyElement.update_time * 1000), true)
	return (
		<div className={styles.historyItemDiv}>
			<p>
				{historyElement.change.author} {actionText} the ticket {historyElement.ticket_title} {timeAgo}
			</p>
            {updates && <>
				{updates.map((update, index) => <p className= {styles.updateParagraph} key={index}>{update}</p>)}
			</>}
		</div>
	)
}

export default TicketsHistory
