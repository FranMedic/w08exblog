import Layout from "Layout/Layout";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [userExist, setUserExist] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserExist(true);
    } else {
      setUserExist(false);
    }
  }, []);

  return userExist ? (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) : (
    <LoginForm />
  );
}
