import { useState } from "react";

const CreatePostForm = () => {
  const postCreate = async (event) => {
    const user = JSON.parse(localStorage.getItem("user"));
    event.preventDefault();
    await fetch("https://isdi-blog-posts-api.herokuapp.com/posts", {
      method: "POST",
      body: JSON.stringify({ ...postData, ...user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onChangeData = (event) => {
    setPostData({ ...postData, [event.target.id]: event.target.value });
  };

  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });
  return (
    <>
      <h1> Create your beautiful post</h1>
      <form autoComplete="off" onSubmit={postCreate} noValidate>
        <div className="mb-3 row">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={postData.title}
            onChange={onChangeData}
            required
            className="mb-2 form-control"
          />
        </div>
        <div className="mb-3 row">
          <label htmlFor="body" className="form-label">
            Title
          </label>
          <textarea
            id="body"
            placeholder="Write the post"
            value={postData.body}
            onChange={onChangeData}
            required
            className="mb-2 form-control"
          />
        </div>
        <button
          value="Submit"
          className="btn btn-primary mt-1 mb-5"
          type="submit"
        >
          Create User
        </button>
      </form>
    </>
  );
};

export default CreatePostForm;
