import { onAuthStateChanged } from "firebase/auth";
import { FunctionComponent, useEffect } from "react";

import { useAppDispatch } from "../../hooks";
import { authActions } from "../../store/auth";
import { auth } from '../../lib/firebase.service'


const AuthWrapper: FunctionComponent<{ children: JSX.Element[] | JSX.Element }> = (props) =>{
    const dispatch = useAppDispatch()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const userInfos = { username: user.displayName, id: user.uid }
				dispatch(authActions.login(userInfos))
			} else {
				dispatch(authActions.logout())
			}
		})
	}, [dispatch])
    return <>{props.children}</>
}

export default AuthWrapper