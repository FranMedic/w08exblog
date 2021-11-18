import { useState } from "react";

const LoginForm = () => {
  const initialValues = {
    name: "",
    avatar: "",
    id: Date.now,
  };

  const [userData, setUserData] = useState(initialValues);
  const userLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(userData));
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
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={userData.name}
                  onChange={onChangeData}
                  required
                  className="mb-2 form-control"
                />
              </div>

              <div className="mb-3 row">
                <label htmlFor="avatar" className="form-label">
                  Avatar
                </label>
                <input
                  type="text"
                  id="avatar"
                  placeholder="avatar"
                  value={userData.avatar}
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
              {userData.avatar ? <img src={userData.avatar} /> : ""}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
