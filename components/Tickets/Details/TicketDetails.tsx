import { Timestamp } from 'firebase/firestore/lite'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { ticketsActions } from '../../../store/tickets'
import { addAnswerToTicket } from '../../../lib/firebase.service'
import { Answer, Ticket } from '../tickets.model'
import { getTimeAgo } from '../../../utils/date.util'

import AnswerDisplay from './AnswerDisplay'
import ReplyForm from './ReplyForm'
import UpdateTicketForm from './UpdateTicketForm'

import styles from './TicketDetails.module.css'

const TicketDetails: FunctionComponent = () => {
	const [ticket, setTicket] = useState<Ticket | null>(null)
	const [isReplyFormOpen, setIsReplyFormOpen] = useState(false)
	const router = useRouter()
	const ticketId = router.query.id
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.auth)

	const tickets = useAppSelector((state) => state.tickets.tickets)

	useEffect(() => {
		async function updateTicket() {
			if (ticketId !== undefined && !Array.isArray(ticketId)) {
				const foundTicket = tickets.find(ticket => ticket.id === ticketId)
				if(foundTicket){
					setTicket(foundTicket)
				}
				//todo can put an else if ticket not found
			}
		}

		if (router.isReady) {
			updateTicket()
		}
	}, [router.isReady, ticketId, tickets])

	function toggleReply() {
		setIsReplyFormOpen((prev) => !prev)
	}

	async function submitReply(reply: string) {
		const answer: Answer = { author: user.username ?? 'anonymous', date: Timestamp.now().seconds, post: reply }
		if (ticketId && !Array.isArray(ticketId)) {
			await addAnswerToTicket(ticketId, answer)
			dispatch(ticketsActions.addReply({ id: ticketId, answer }))
		}
	}

	const answersDisplay = ticket?.answers.map((answer, i) => <AnswerDisplay key={i} answer={answer} />)
	const dateAgo = ticket && getTimeAgo(new Date(ticket.created_at * 1000), false)
	const dateFull = ticket && getTimeAgo(new Date(ticket.created_at * 1000), true)

	return (
		<div className="content-div">
			<div className={`container white-container`}>
				{ticket && (
					<div className={styles.ticketDiv}>
						<div className={styles.leftArea}>
							<div className={styles.postDiv}>
								<h4 className={styles.ticketTitle}>{ticket.title}</h4>
								<p>Created by <span className={styles.author}>{ticket.author}</span></p>
								<p className={styles.createdDate}>{dateAgo} ({dateFull})</p>
								<p className={styles.message}>{ticket.message}</p>
							</div>
							{answersDisplay}
							<button type="button" className={`btn btn-primary ${styles.replyBtn}`} onClick={toggleReply}>
								Reply
							</button>
							{isReplyFormOpen && <ReplyForm title={ticket.title} submit={submitReply} toggle={toggleReply} />}
						</div>
						<div className={styles.rightArea}>
							<UpdateTicketForm ticket={ticket} />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default TicketDetails
