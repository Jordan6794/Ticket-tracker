import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '../store'

import Nav from '../components/Nav/Nav'

import '../styles/globals.css'
import AuthWrapper from '../components/Auth/AuthWrapper'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AuthWrapper>
				<Nav />
				<Component {...pageProps} />
			</AuthWrapper>
		</Provider>
	)
}

export default MyApp
