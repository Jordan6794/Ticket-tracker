import { FunctionComponent, useState } from 'react'

import { signInUser, signUpUserWithUsername } from '../../lib/firebase.service'

const AuthForm: FunctionComponent = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [formInputs, setFormInputs] = useState({
		username: '',
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

	async function onSubmitForm(event: React.FormEvent) {
		event.preventDefault()

		const { username, email, password, repeatPassword } = formInputs

		if (isLogin) {
			const response = await signInUser(email, password)
			if (!response) {
				//todo gerer errors (same for signup)
			} else {
				resetForm()
			}
		} else {
			signUpUserWithUsername(email, password, username)
			resetForm()
		}
	}

	function onSwitchAuthtype() {
		setIsLogin((prevType) => !prevType)
		resetForm()
	}

	function resetForm() {
		setFormInputs({
			username: '',
			email: '',
			password: '',
			repeatPassword: '',
		})
	}

	return (
		<>
			<h3>{isLogin ? 'Login' : 'Signup'}</h3>
			<form>
				{!isLogin && (
					<>
						<label htmlFor="username">Username</label>
						<input
							name="username"
							id="username"
							onChange={(event) => onInputChange(event, 'username')}
							value={formInputs.username}
						/>
					</>
				)}

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
					type="password"
					onChange={(event) => onInputChange(event, 'password')}
					value={formInputs.password}
				/>

				{!isLogin && (
					<>
						<label htmlFor="repeat-password">Repeat Password</label>
						<input
							name="repeat-password"
							id="repeat-password"
							type="password"
							onChange={(event) =>
								onInputChange(event, 'repeatPassword')
							}
							value={formInputs.repeatPassword}
						/>
					</>
				)}

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
