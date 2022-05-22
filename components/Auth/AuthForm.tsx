import { FunctionComponent, useState } from 'react'

const AuthForm: FunctionComponent = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [formInputs, setFormInputs] = useState({
		email: '',
		password: '',
		repeatPassword: '',
	})

	function onInputChange(
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
		inputName: string
	) {
		const newInput = event.target.value

		setFormInputs((prevInputs) => ({ ...prevInputs, [inputName]: newInput }))
	}

	function onSubmitForm(event: React.FormEvent) {
		event.preventDefault()
		console.log(formInputs)
	}

    function onSwitchAuthtype(){
        setIsLogin(prevType => !prevType)
    }

	return (
		<>
			<h3>{isLogin ? 'Login' : 'Signup'}</h3>
			<form>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					onChange={(event) => onInputChange(event, 'email')}
					value={formInputs.email}
				/>

				<label htmlFor="password">Password</label>
				<input
					name="password"
					id="password"
					onChange={(event) => onInputChange(event, 'password')}
					value={formInputs.password}
				/>

				<label htmlFor="repeat-password">Repeat Password</label>
				<input
					name="repeat-password"
					id="repeat-password"
					onChange={(event) => onInputChange(event, 'repeatPassword')}
					value={formInputs.repeatPassword}
				/>

				<button type="submit" onClick={onSubmitForm}>
					Submit
				</button>
				<button type="button" onClick={onSwitchAuthtype}>
					Switch to {isLogin ? 'Signup' : 'Login'}
				</button>
			</form>
		</>
	)
}

export default AuthForm
