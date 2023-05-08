"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
function AccountIcon() {
  const [AccountDetail, setAccountDetails] = useState({
    name: "Login",
    url: "/login",
  });
  useEffect(() => {
    const token: string | null = localStorage.getItem("myytkey");
    if (token) {
      const tokenDetails: tokenDetails = JSON.parse(token);
      setAccountDetails({ name: tokenDetails.name, url: "/user" });
    } else {
      setAccountDetails({ name: "Login", url: "/login" });
    }
  }, []);
  return (
    <Link
      className="h-10 bg-gray-400  flex justify-center items-center w-[97%]"
      href={AccountDetail.url}
    >
      {AccountDetail.name}
    </Link>
  );
}

export default AccountIcon;
