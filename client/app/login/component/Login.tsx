"use client";
import React, { useState } from "react";

export default function login() {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCreds((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex mb-20 flex-col p-7 border-2  w-1/3 "
    >
      <label> Email</label>
      <input
        value={creds.email}
        name="email"
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <br className="my-2" />
      <label> Password </label>
      <input
        value={creds.password}
        name="password"
        onChange={handleChange}
        placeholder="Enter your Password"
      />
      <br className="my-2" />
      <button type="submit" className="bg-gray-600 p-1.5 mx-auto w-1/3">
        {" "}
        Login
      </button>
    </form>
  );
}
