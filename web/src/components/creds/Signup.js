import { CredContext } from "../../contextApi/context";
import React, { useState, useContext } from "react";
export default function Signup() {
  const credFunc = useContext(CredContext);
  const [cred, setCred] = useState({
    email: "",
    password1: "",
    password2: "",
    name: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCred((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cred.password1 === cred.password2) {
      const { signup } = await credFunc.signup(
        cred.email,
        cred.password1,
        cred.name
      );
      if (signup) {
        alert("you are logging in");
      } else if (!signup) {
        alert("user alreay exist");
      }
    } else {
      alert("Passwords are not matching....");
    }
  };
  return (
    <>
      <div className="cred-box">
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div>
            <label htmlFor="exampleinput1">Enter your name</label>
            <input
              onChange={handleChange}
              name="name"
              value={cred.name}
              placeholder="Your Name"
              className="creds"
              type="text"
            />
            <label htmlFor="exampleinput1">Enter the email</label>
            <input
              onChange={handleChange}
              name="email"
              value={cred.email}
              placeholder="Your Email"
              className="creds"
              type="email"
            />
            <label htmlFor="exampleinput2">Type the password</label>
            <input
              onChange={handleChange}
              name="password1"
              value={cred.password1}
              placeholder="Password"
              className="creds"
              type="password"
            />
            <label htmlFor="exampleinput3">Retype the password</label>
            <input
              onChange={handleChange}
              name="password2"
              value={cred.password2}
              placeholder="Retype-Password"
              className="creds"
              type="password"
            />
          </div>
          <button type="submit">Signup</button>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
