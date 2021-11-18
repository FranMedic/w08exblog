import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [userExist, setUserExist] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserExist(true);
    } else {
      setUserExist(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <>
      <Head>
        <title>Create Next FRANNY</title>
        <link rel="icon" href="/bongocat.png" />
      </Head>
      <ul>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/create-posts">
            <a>Create posts</a>
          </Link>
        </li>
        {userExist ? (
          <li>
            <button onClick={logout}>
              <a>Logout</a>
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </>
  );
};
export default Header;
