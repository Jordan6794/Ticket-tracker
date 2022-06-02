
import { Answer, AnswerRAW, Ticket, TicketChanges, TicketChangesRAW, TicketRAW } from "../components/Tickets/tickets.model";


export function serializeTicket(ticket: TicketRAW): Ticket{
    const created_at = ticket.created_at.seconds
    const last_updated_date = ticket.last_updated_date.seconds
    const answers = serializeAnswers(ticket.answers)

    return {...ticket, created_at, last_updated_date, answers }
}


export function serializeAnswer(answer: AnswerRAW): Answer{
    const date = answer.date.seconds

    return {...answer, date}
}

export function serializeAnswers(answers: AnswerRAW[]): Answer[]{
    return answers.map(answer => serializeAnswer(answer))
}

export function serializeChanges(changes: TicketChangesRAW): TicketChanges{
    return {...changes, last_updated_date: changes.last_updated_date.seconds}
}