import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Posts = ({ posts }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <h1>Welcome to Posts Entries</h1>
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id} passHref>
            <li key={post.id}>{post.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts/"
  );
  const posts = await response.json();

  return {
    props: { posts },
  };
};
export default Posts;
