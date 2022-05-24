import { FunctionComponent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch } from '../../hooks'

import { ticketsActions } from '../../store/tickets'
import { Ticket, Priority, Status } from './tickets.model'

const NewTicketForm: FunctionComponent = () => {
	const [formInputs, setFormInputs] = useState({
		title: '',
		post: '',
	})

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

		const currentDate = new Date().toString()
		const newTicket: Ticket = {
			title: formInputs.title,
			author: 'me',
			message: formInputs.post,
			id: uuidv4(),
			dateCreated: currentDate,
			priority: Priority.Low,
			status: Status.Open,
			answers: [],
		}
		dispatch(ticketsActions.add(newTicket))

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
