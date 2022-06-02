import { Timestamp } from 'firebase/firestore/lite'
import { FunctionComponent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { postTicket } from '../../lib/firebase.service'
import { ticketsActions } from '../../store/tickets'
import { serializeTicket } from '../../utils/serialize.util'
import { Priority, Status, TicketRAW } from './tickets.model'

const NewTicketForm: FunctionComponent = () => {
	const [formInputs, setFormInputs] = useState({
		title: '',
		post: '',
	})

	const user = useAppSelector((state) => state.auth)
	const dispatch = useAppDispatch()

	function onInputChange(
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
		inputName: string
	) {
		const newInput = event.target.value

		setFormInputs((prevInputs) => ({ ...prevInputs, [inputName]: newInput }))
	}

	function onSubmitForm(event: React.FormEvent) {
		event.preventDefault()

		const currentDate = Timestamp.now()
		const newTicket: TicketRAW = {
			title: formInputs.title,
			author: user.username || 'anonymous',
			message: formInputs.post,
			id: uuidv4(),
			created_at: currentDate,
			last_updated_date: currentDate,
			priority: Priority.Low,
			status: Status.Open,
			answers: [],
		}

		postTicket(newTicket)
		//todo need to put un if que la post req success

		const serializedTicket = serializeTicket(newTicket)
		dispatch(ticketsActions.add(serializedTicket))

		resetForm()
	}

	function resetForm() {
		setFormInputs({
			title: '',
			post: '',
		})
	}

	return (
		<form>
			<label htmlFor="title">Title</label>
			<input
				type="text"
				name="title"
				id="title"
				onChange={(event) => onInputChange(event, 'title')}
				value={formInputs.title}
			/>

			<label htmlFor="post">Post</label>
			<textarea
				name="post"
				id="post"
				onChange={(event) => onInputChange(event, 'post')}
				value={formInputs.post}
			/>

			<button type="submit" onClick={onSubmitForm}>
				Submit
			</button>
		</form>
	)
}

export default NewTicketForm
