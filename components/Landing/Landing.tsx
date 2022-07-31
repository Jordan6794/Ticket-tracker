import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import { signInUser } from "../../lib/firebase.service";

import styles from "./Landing.module.css"

const Landing: FunctionComponent = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    const router = useRouter()

    async function loginDemo(){
        const demoEmail = 'johndemo@gmail.com'
        const demoPassword = 'johndemo'
        setIsLoggingIn(true)
        const response = await signInUser(demoEmail, demoPassword)
        setIsLoggingIn(false)
			if (!response) {
				//todo gerer errors (same for signup)
			} else {
				router.push('/tickets/feedopen?orderBy=created_at')
			}
    }

    return(
        <div className={styles.wrapperDiv}>
            <div className={styles.card}>
                <h1 className={styles.logoTitle}>Team Ticket</h1>
                <p className={styles.description}>Team Ticket is a ticket managing web application that helps your company manage issues as a team.</p>
                <button className={`btn ${styles.btn} ${styles.btnDemo}`} onClick={loginDemo}>{isLoggingIn ? 'Logging In..' : 'Try as Demo User'}</button>
                <Link href='/auth'>
                    <button className={`btn ${styles.btn} ${styles.btnAuth}`}>Login / Signup</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing