import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={session}></SessionProvider>
    
  );
}

export default MyApp;
