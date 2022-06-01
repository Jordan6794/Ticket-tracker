import { FunctionComponent, useState } from 'react'

const ReplyForm: FunctionComponent<{ toggle: () => void, submit: (reply: string) => void }> = ({ toggle, submit }) => {
	const [input, setInput] = useState('')

	function onSubmitForm(e: React.FormEvent) {
        e.preventDefault()
		submit(input)
		toggle()
	}

	return (
		<form>
			<textarea name="post" id="post" onChange={(event) => setInput(event.target.value)} value={input} />

			<button type="button" onClick={toggle}>
				Cancel
			</button>
			<button type="submit" onClick={onSubmitForm}>
				Submit
			</button>
		</form>
	)
}

export default ReplyForm
