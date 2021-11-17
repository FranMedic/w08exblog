import Layout from "Layout/Layout";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
