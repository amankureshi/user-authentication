import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
      </form>
    </div>
  );
};

export default Login;
