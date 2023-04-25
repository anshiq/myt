import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Logout() {
  const [logoutButtonVisibility, setLogoutButtonVisibility] = useState(false);
  const route = useRouter();
  const RedirectLogin = () => {
    localStorage.removeItem("myytkey");
    alert("hule");
    route.push("/");
  };
  useEffect(() => {
    const token: string | null = localStorage.getItem("myytkey");
    if (token) {
      setLogoutButtonVisibility(true);
    }
  }, []);

  return (
    <button
      onClick={RedirectLogin}
      className={
        logoutButtonVisibility == true
          ? "flex h-10 bg-red-900 justify-center items-center w-5/6"
          : "hidden"
      }
    >
      Logout
    </button>
  );
}

export default Logout;
