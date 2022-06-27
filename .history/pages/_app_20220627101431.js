import '../styles/globals.css'
import { StoreProvider } from '../utils/Store'

function MyApp({ Component, pageProps }) {
  return <StoreProvider></StoreProvider>
}

export default MyApp
