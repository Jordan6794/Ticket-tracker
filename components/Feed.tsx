import { useDispatch, useSelector } from "react-redux"
import { useAppSelector } from "../hooks"
import { authActions } from "../store/auth"
import { counterActions } from "../store/counter"

export default function Feed() {
	const counter = useAppSelector(state => state.counter)
	const auth = useAppSelector(state => state.auth)

	const dispatch = useDispatch()

	function onIncrement(){
		dispatch(counterActions.increment())
	}

	function onDecrement(){
		dispatch(counterActions.decrement())
	}

	function onIncrease(){
		dispatch(counterActions.increase(2))
	}

	function onLogin(){
		dispatch(authActions.login())
	}
	
	return (
		<>
			<h3>Feed</h3>
			{counter.count}
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
			<button onClick={onIncrease}>++</button>
			<hr />
			Auth : {auth ? 'logged in' : 'out'}
			<button onClick={onLogin}>Login</button>
		</>
	)
}
