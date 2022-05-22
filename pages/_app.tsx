import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import Nav from '../components/Nav/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Nav />
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp
