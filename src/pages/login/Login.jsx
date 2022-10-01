import React, { useState } from "react";
import { useGlobalContext } from "../../functions/Context";
import "./login.css";
function Login() {
  const { loginUser, message } = useGlobalContext();
  const [person, setPerson] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    loginUser(person);
    setPerson({ email: "", password: "" });
  };
  return (
    <section>
      <div className="container login-container">
        <form action="" className="login_form" onSubmit={submitHandle}>
          <h1
            style={{
              textAlign: "center",
              color: "var(--red)",
              marginBottom: "2rem",
            }}
          >
            Login Now
          </h1>
          <p className="message">{message}</p>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Login" className="btn " />
        </form>
      </div>
    </section>
  );
}

export default Login;
