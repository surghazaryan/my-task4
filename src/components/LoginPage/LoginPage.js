import React from "react";
import "../styles/LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>facebook</h1>
          <h2>
            Connect with friends and the world
            <br /> around you on Facebook.
          </h2>
        </div>
        <div className="form-container">
          <form>
            <input type="text" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <button>Log in</button>
            <div className="forgout">
              <a href="">Forgout password?</a>
            </div>
            <hr />
          </form>
          <div className="create">
            <button className="btn-create">Create new account</button>
          </div>
          <div>
            <p>
              <span>Create a Page</span> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
