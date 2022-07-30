import type { NextPage } from 'next'
import Head from 'next/head'

import Landing from '../components/Landing/Landing'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Team Ticket</title>
				<meta name="description" content="Team ticket managing webapp" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Landing />
		</>
	)
}

export default Home
