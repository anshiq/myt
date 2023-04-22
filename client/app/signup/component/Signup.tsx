"use client";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Signup() {
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCreds((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(creds);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(creds.password == creds.repassword && creds.password.length > 8)) {
      alert("password is not same or length is < 8");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex mb-20 flex-col p-7 border-2  w-1/3 "
    >
      <label>Name</label>
      <input
        name="name"
        value={creds.name}
        onChange={handleChange}
        type="text"
        placeholder="Enter you name here"
      />
      <br className="my-2" />
      <label> Email</label>
      <input
        value={creds.email}
        name="email"
        type="email"
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <br className="my-2" />
      <label> Password </label>
      <input
        value={creds.password}
        name="password"
        type="password"
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <br className="my-2" />
      <label>Re-type Password </label>
      <input
        value={creds.repassword}
        name="repassword"
        type="password"
        placeholder="Enter your Password again"
        onChange={handleChange}
      />
      <br className="my-2" />
      <button type="submit" className="bg-gray-600 p-1.5 mx-auto w-1/3">
        {" "}
        Signup
      </button>
    </form>
  );
}
