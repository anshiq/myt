"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function UserDashboard() {
  const route = useRouter();
  const RedirectLogin = () => {
    localStorage.removeItem("myytkey");
    route.push("/login");
  };
  useEffect(() => {
    const token: string | null = localStorage.getItem("myytkey");
    if (token) {
      const tokenData: tokenDetails = JSON.parse(token);
    } else {
      RedirectLogin();
    }
  }, []);
  return <div>ajdjd</div>;
}

export default UserDashboard;
