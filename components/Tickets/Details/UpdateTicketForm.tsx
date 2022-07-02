import { Timestamp } from 'firebase/firestore/lite'
import { useRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'

import { useAppDispatch } from '../../../hooks'
import { deleteTicket, updateTicket } from '../../../lib/firebase.service'
import { ticketsActions } from '../../../store/tickets'
import { QUERY_CREATED_AT } from '../../../utils/consts'
import { Priority, Status, Ticket, TicketChanges } from '../tickets.model'

import styles from './UpdateTicketForm.module.css'

const UpdateTicketForm: FunctionComponent<{ ticket: Ticket }> = ({ ticket }) => {
	const [formInputs, setFormInputs] = useState<TicketChanges>({
		status: ticket.status,
		priority: ticket.priority,
		last_updated_date: ticket.last_updated_date,
	})
	const [didInputsChange, setDidInputChange] = useState(false)
	const [isUpdating, setIsUpdating] = useState(false)
	const dispatch = useAppDispatch()
    const router = useRouter()

	function onInputChange(event: React.ChangeEvent<HTMLSelectElement>, inputName: string) {
		setDidInputChange(true)
		const newInput = event.target.value

		setFormInputs((prevInputs) => ({ ...prevInputs, [inputName]: newInput }))
	}

	async function onSubmitForm(event: React.FormEvent) {
		event.preventDefault()
        const changes: TicketChanges = {...formInputs, last_updated_date: Timestamp.now().seconds}
		setIsUpdating(true)
		//? update le last_updated_time in my fonctions rather than here ? Need be carefull to have same in both foncts
		await updateTicket(ticket.id, changes)
		dispatch(ticketsActions.updateTicket({ id: ticket.id, changes }))
		setIsUpdating(false)
	}

	async function handleSolveTicket() {
		const changes: TicketChanges = { status: Status.Resolved, last_updated_date: Timestamp.now().seconds }
		await updateTicket(ticket.id, changes)
		dispatch(ticketsActions.updateTicket({ id: ticket.id, changes }))
	}

    async function handleDelete(){
        await deleteTicket(ticket.id)
        dispatch(ticketsActions.deleteTicket(ticket.id))
        router.push(`/tickets/feed?orderBy=${QUERY_CREATED_AT}`)
    }

	return (
		<>
			<form>
				<label className={styles.label} htmlFor="status">Status</label>
				<select  className={styles.select} name="status" id="status" onChange={(event) => onInputChange(event, 'status')} value={formInputs.status}>
					{Object.values(Status).map((status, i) => (
						<option key={i} value={status}>
							{status}
						</option>
					))}
				</select>

				<label className={styles.label} htmlFor="priority">Priority</label>
				<select  className={styles.select} name="priority" id="priority" onChange={(event) => onInputChange(event, 'priority')} value={formInputs.priority}>
					{Object.values(Priority).map((priority, i) => (
						<option key={i} value={priority}>
							{priority}
						</option>
					))}
				</select>

				<button disabled={!didInputsChange} className={`btn btn-primary ${styles.btn} ${styles.updateBtn}`} type="submit" onClick={onSubmitForm}>
					{isUpdating ? 'Updating...' : 'Update'}
				</button>
			</form>
			{ticket.status !== Status.Resolved && (
				<button type="button" className={`btn btn-primary ${styles.btn} ${styles.resolveBtn}`} onClick={handleSolveTicket}>
					Resolve
				</button>
			)}
                <button type="button" className={`btn btn-primary ${styles.btn} ${styles.deleteBtn}`} onClick={handleDelete}>
					Delete
				</button>
		</>
	)
}

export default UpdateTicketForm
