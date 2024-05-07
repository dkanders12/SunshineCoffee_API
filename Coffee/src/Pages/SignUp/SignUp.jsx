import React, { useState } from "react";
import "./SignUp.scss";
import Testimonies from "../../Components/Testimonies/Testimonies";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Could not sign up. Please try again.");
      }

      window.location.href = "/login";
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section id="signUpForm">
      <div>
        <h2>Sign Up</h2>
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
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </article>
      </div>
      <Testimonies></Testimonies>
    </section>
  );
};

export default SignUp;
