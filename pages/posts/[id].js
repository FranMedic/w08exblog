import { useRouter } from "next/dist/client/router";

const postsID = ({ posts }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <h1> Detalles posts</h1>

      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
    </>
  );
};

export default postsID;

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts/"
  );
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { id: "" + post.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts/" + id
  );
  const posts = await response.json();

  return {
    props: { posts },
  };
};
