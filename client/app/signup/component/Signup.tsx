"use client";
import { useState, FormEvent } from "react";

export default function Signup() {
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const handleChange = (e: any) => {};
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex mb-20 flex-col p-7 border-2  w-1/3 "
    >
      <label>Name</label>
      <input
        onchange={handleChange}
        value={creds.name}
        type="text"
        placeholder="Enter you name here"
      />
      <br className="my-2" />
      <label> Email</label>
      <input
        onchange={handleChange}
        value={creds.email}
        type="email"
        placeholder="Enter your Email"
      />
      <br className="my-2" />
      <label> Password </label>
      <input
        onchange={handleChange}
        value={creds.password}
        type="password"
        placeholder="Enter your Password"
      />
      <br className="my-2" />
      <label>Re-type Password </label>
      <input
        onchange={handleChange}
        value={creds.repassword}
        type="password"
        placeholder="Enter your Password again"
      />
      <br className="my-2" />
      <button type="submit" className="bg-gray-600 p-1.5 mx-auto w-1/3">
        {" "}
        Login
      </button>
    </form>
  );
}
