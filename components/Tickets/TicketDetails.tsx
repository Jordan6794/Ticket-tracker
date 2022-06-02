import { Timestamp } from 'firebase/firestore/lite'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { ticketsActions } from '../../store/tickets'
import { addAnswerToTicket, getTicket } from '../../lib/firebase.service'
import { AnswerRAW, Ticket } from './tickets.model'
import { getTimeAgo } from '../../utils/date.util'
import { serializeAnswer, serializeTicket } from '../../utils/serialize.util'

import AnswerDisplay from './AnswerDisplay'
import ReplyForm from './ReplyForm'
import UpdateTicketForm from './UpdateTicketForm'

const TicketDetails: FunctionComponent = () => {
	const [ticket, setTicket] = useState<Ticket | null>(null)
	const [isReplyFormOpen, setIsReplyFormOpen] = useState(false)
	const router = useRouter()
	const ticketId = router.query.id
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.auth)

	//? way un peu tordu d'update mon ticket state ? Je dispatch un change dans mes tickets state (after push to db)
	//? -> qui va rerun l'effect qui fetch le ticket corespondant de la db
	const tickets = useAppSelector((state) => state.tickets)

	useEffect(() => {
		async function fetchTicket() {
			if (ticketId !== undefined && !Array.isArray(ticketId)) {
				const result = await getTicket(ticketId)
				if (result) {
					setTicket(serializeTicket(result))
				}
			}
		}

		if (router.isReady) {
			fetchTicket()
		}
	}, [router.isReady, ticketId, tickets])

	function toggleReply() {
		setIsReplyFormOpen((prev) => !prev)
	}

	async function submitReply(reply: string) {
		const answer: AnswerRAW = { author: user.username ?? 'anonymous', date: Timestamp.now(), post: reply }
		if (ticketId && !Array.isArray(ticketId)) {
			await addAnswerToTicket(ticketId, answer)

			dispatch(ticketsActions.addReply({ id: ticketId, answer: serializeAnswer(answer) }))
		}
	}

	const answersDisplay = ticket?.answers.map((answer, i) => <AnswerDisplay key={i} answer={answer} />)

	return (
		<div className="ticket-details">
			<p>details id : {ticketId}</p>
			{ticket && (
				<>
					<div>
						<h4>{ticket.title}</h4>
						<p>{ticket.message}</p>
						<p>{ticket.author}</p>
						<p>{getTimeAgo(new Date(ticket.created_at * 1000))}</p>
						<p>{ticket.answers.length} answer</p>
					</div>
					{answersDisplay}
					<button type="button" onClick={toggleReply}>
						Reply
					</button>
					{isReplyFormOpen && <ReplyForm submit={submitReply} toggle={toggleReply} />}
					<UpdateTicketForm ticket={ticket} />
				</>
			)}
		</div>
	)
}

export default TicketDetails
