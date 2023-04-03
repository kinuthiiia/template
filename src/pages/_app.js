import { withUrqlClient } from "next-urql";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withUrqlClient(() => ({
  url: process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL,
}))(App);
