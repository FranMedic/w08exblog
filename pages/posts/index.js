import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Posts = ({ posts }) => {
  console.log(posts);
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }

  const deletePost = async (event) => {
    event.preventDefault();
    await fetch("https://isdi-blog-posts-api.herokuapp.com/posts", {
      method: "DELETE",
      body: JSON.stringify({ posts }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <h1>Welcome to Posts Entries</h1>
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id} passHref>
            <li key={post.id}>
              <p>{post.title}</p>
              <img src={post.userAvatar} width="100" />
              <div>{post.userName}</div>
              {JSON.parse(
                localStorage.getItem("user").includes(post.userName)
              ) ? (
                <button type="button" onClick={deletePost}>
                  Delete
                </button>
              ) : (
                ""
              )}
            </li>
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
