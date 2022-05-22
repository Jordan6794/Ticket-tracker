import Link from "next/link"
import styles from "./Nav.module.css"

export default function Nav(){

    return(
        <div className={styles.nav}>
            <ul className={styles.linkList}>
            <li><Link href='/tickets/feed'>Tickets</Link></li>
                <li><Link href='/'>Home page</Link></li>
                <li><Link href='/auth'>Login</Link></li>
                <li>Logout</li>
            </ul>
        </div>
    )
}