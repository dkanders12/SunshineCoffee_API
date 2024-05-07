import React, { useState } from "react";
import Testimonies from "../../Components/Testimonies/Testimonies";
import { NavLink } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      window.location.href = "/";
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section id="loginForm">
      <div>
        <h2>Login</h2>
        <article id="formPlace">
          <form onSubmit={handleSubmit}>
            <h4>Email</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <div>
              <NavLink id="Sign" to="/SignUp">
                Signup
              </NavLink>
              <button type="submit">Submit</button>
            </div>
          </form>
        </article>
      </div>
      <Testimonies></Testimonies>
    </section>
  );
};

export default Login;
