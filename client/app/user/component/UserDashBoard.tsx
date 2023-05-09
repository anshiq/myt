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
  useEffect(() => {
    const localToken: string | null = localStorage.getItem("myytkey");
    if (!localToken) {
      localStorage.removeItem("myytkey");
      route.push("/login");
      return;
    } else {
      const tokenData: tokenDetails = JSON.parse(localToken);
      setToken({ token: tokenData.token, name: tokenData.name });
      //console.log(Token);
    }
  });
  return (
    <>
      <h1 className="mt-4 ml-4">{Token.name}</h1>
      <Videos />
    </>
  );
}

export default UserDashboard;
