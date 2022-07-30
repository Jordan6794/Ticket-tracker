import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./Landing.module.css"

const Landing: FunctionComponent = () => {

    return(
        <div className={styles.wrapperDiv}>
            <div className={styles.card}>
                <h1 className={styles.logoTitle}>Team Ticket</h1>
                <p className={styles.description}>Team Ticket is a ticket managing web application that helps your company manage issues as a team.</p>
                <button className={`btn ${styles.btn} ${styles.btnDemo}`}>Try as Demo User</button>
                <Link href='/auth'>
                    <button className={`btn ${styles.btn} ${styles.btnAuth}`}>Login / Signup</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing