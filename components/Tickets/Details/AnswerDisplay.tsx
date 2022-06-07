import { FunctionComponent } from "react";
import { getTimeAgo } from "../../../utils/date.util";
import { Answer } from "../tickets.model";


const AnswerDisplay: FunctionComponent<{answer: Answer}> = ({answer}) => {
    const formatedDate = getTimeAgo(new Date(answer.date * 1000))

    return(
        <div className="answer">
            <p>By {answer.author} {formatedDate}</p>
            <p>answer : {answer.post}</p>
        </div>
    )
}

export default AnswerDisplay