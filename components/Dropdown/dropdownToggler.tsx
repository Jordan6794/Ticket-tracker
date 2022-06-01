import { useRouter } from "next/router"
import { FunctionComponent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"

import { sortByActions } from "../../store/sortBy"
import { displaySortBy } from "../../utils/sortDisplay"

import styles from './dropdown.module.css'

const DropdownToggler: FunctionComponent<{ children?: JSX.Element[] | JSX.Element }> = (props) => {
    const [open, setOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
	const sortBy = useAppSelector(state => state.sortBy)
    const router = useRouter()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(isMounted){
            const currentQuery = router.query.orderBy
            if(sortBy !== currentQuery){
                router.push(`/tickets/feed?orderBy=${sortBy}`)
            }
        } else {
            setIsMounted(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortBy])

    useEffect(() => {
        if(router.isReady){
            if(router.query.orderBy && !Array.isArray(router.query.orderBy))
                dispatch(sortByActions.set(router.query.orderBy))
        }
    }, [router.isReady, dispatch, router.query.orderBy])

    const sortByDisplay = displaySortBy(sortBy)

    return(
        <div className={styles.togglerDiv}>
           <button className={styles.togglerBtn} onClick={() => setOpen(prevState => !prevState)}>{sortByDisplay}</button>
           {open && props.children}
        </div>
    )
}

export default DropdownToggler