"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";

function UserDashboard() {
  const [Token, setToken] = useState({
    name: "",
    token: "",
  });
  const route = useRouter();
  const RedirectLogin = () => {
    localStorage.removeItem("myytkey");
    route.push("/login");
  };

  useEffect(() => {
    const localToken: string | null = localStorage.getItem("myytkey");
    if (!localToken) {
      RedirectLogin();
      return;
    } else {
      const tokenData: tokenDetails = JSON.parse(localToken);
      setToken({ token: tokenData.token, name: tokenData.name });
      console.log(Token);
    }
  }, []);
  return (
    <>
      <h1>{Token.name}</h1>
      <Videos />
    </>
  );
}

export default UserDashboard;
