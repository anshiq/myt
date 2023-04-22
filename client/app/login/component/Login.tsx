"use client";
import React from "react";

export default function login() {
  return (
    <form className="flex mb-20 flex-col p-7 border-2  w-1/3 ">
      <label> Email</label>
      <input placeholder="Enter your Email" />
      <br className="my-2" />
      <label> Password </label>
      <input placeholder="Enter your Password" />
      <br className="my-2" />
      <button type="submit" className="bg-gray-600 p-1.5 mx-auto w-1/3">
        {" "}
        Login
      </button>
    </form>
  );
}
