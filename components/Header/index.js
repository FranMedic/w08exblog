import Link from "next/link";
import Head from "next/head";
const Header = () => {
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
      </ul>
    </>
  );
};
export default Header;
