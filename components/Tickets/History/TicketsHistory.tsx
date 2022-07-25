import { FunctionComponent } from "react";

import { useAppSelector } from '../../../hooks'
import HistoryItem from "./HistoryItem";

import styles from "./History.module.css"

const TicketsHistory: FunctionComponent = () => {
    const history = useAppSelector(state => state.tickets.history)

    // reversing so that we have the latest first
    const reversedHistory = history.slice().reverse()

    const historyItems = reversedHistory.map((element, index) => <HistoryItem key={index} historyElement={element} />)

    return(
        <div className="content-div">
             <div className='container'>
                <h3>History works</h3>

                <div className={styles.historyTableDiv}>
                    {historyItems}
                </div>
             </div>
        </div>
    )
}

export default TicketsHistory