"use client";
import login from "@/lib/Login";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";

export default function Login() {
  const route = useRouter();
  const [creds, setCreds] = useState({ email: "", password: "" });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCreds((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };
  useEffect(() => {
    const token: string | null = localStorage.getItem("myytkey");
    if (token) {
      route.push("/");
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token: tokenDetails = await login(creds.email, creds.password);
    if (token.login == true) {
      localStorage.setItem("myytkey", JSON.stringify(token));
      alert(token.msg);
      window.location.replace("/");
    } else {
      alert(token.msg);
    }
  };
  return (
    <Suspense fallback={<h1>Loading the login page....</h1>}>
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
          type="password"
          onChange={handleChange}
          placeholder="Enter your Password"
        />
        <br className="my-2" />
        <button type="submit" className="bg-gray-600 p-1.5 mx-auto w-1/3">
          {" "}
          Login
        </button>
      </form>
    </Suspense>
  );
}
