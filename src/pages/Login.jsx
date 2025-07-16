import React, { useState } from "react";
import { userAuth } from "../context/AuthContext";
import { loginRequest } from "../services/authService";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = userAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefalut();
    setError(null);

    try {
      const data = await loginRequest(form);
      login({ id: data.id, username: data.username }, data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.resposne?.data?.message || "Login Faild");
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
