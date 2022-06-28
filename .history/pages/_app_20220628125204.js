import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component {session, }}) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
