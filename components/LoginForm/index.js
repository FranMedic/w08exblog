import { useRouter } from "next/router";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const initialValues = {
    userName: "",
    userAvatar: "",
  };

  const [userData, setUserData] = useState(initialValues);

  const userLogin = (event) => {
    event.preventDefault();
    const userId = Date.now;
    localStorage.setItem("user", JSON.stringify({ ...userData, userId }));
    router.push("/");
  };

  const onChangeData = (event) => {
    event.preventDefault();

    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  return (
    <>
      <div className="container ">
        <section className="row justify-content-center">
          <div className=" col-4 form-container">
            <form autoComplete="off" onSubmit={userLogin} noValidate>
              <div className="mb-3 row">
                <label htmlFor="userName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  placeholder="userName"
                  value={userData.userName}
                  onChange={onChangeData}
                  required
                  className="mb-2 form-control"
                />
              </div>

              <div className="mb-3 row">
                <label htmlFor="userAvatar" className="form-label">
                  Avatar
                </label>
                <input
                  type="text"
                  id="userAvatar"
                  placeholder="userAvatar"
                  value={userData.userAvatar}
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
                Login
              </button>
              {userData.userAvatar ? <img src={userData.userAvatar} /> : ""}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
