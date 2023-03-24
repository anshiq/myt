import "./login.css";
import { CredContext } from "../../contextApi/context";
import React, { useState, useContext } from "react";
export default function Login() {
  const userFunc = useContext(CredContext);
  const [cred, setCred] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCred((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const login = await userFunc.login(cred.email, cred.password);
    if (login) {
      alert("you are logged in ");
    } else {
      alert("something is wrong in your credentials");
    }
  };
  return (
    <>
      <div className="cred-box">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="exampleinput1">Enter the email</label>
            <input
              onChange={handleChange}
              name="email"
              value={cred.email}
              placeholder="email"
              className="creds"
              type="text"
            />
            <label htmlFor="exampleinput2">Enter the password</label>
            <input
              onChange={handleChange}
              name="password"
              value={cred.password}
              placeholder="password"
              className="creds"
              type="text"
            />
          </div>
          <button type="submit">Login</button>
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
}
