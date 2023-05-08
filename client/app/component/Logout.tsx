import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Logout() {
  const [logoutButtonVisibility, setLogoutButtonVisibility] = useState(false);
  const route = useRouter();
  const RedirectLogin = () => {
    localStorage.removeItem("myytkey");
    window.location.reload();
  };
  useEffect(() => {
    const token: string | null = localStorage.getItem("myytkey");
    if (token) {
      setLogoutButtonVisibility(true);
    } else {
      setLogoutButtonVisibility(false);
    }
  }, []);

  return (
    <>
      <button
        onClick={RedirectLogin}
        className={
          logoutButtonVisibility == true
            ? "flex h-10 bg-gray-500 justify-center items-center w-5/6"
            : "hidden"
        }
      >
        Logout
      </button>
      <button
        onClick={() => route.push("/upload")}
        className={
          logoutButtonVisibility == true
            ? "flex h-10 bg-gray-500 justify-center items-center w-5/6"
            : "hidden"
        }
      >
        Upload
      </button>
    </>
  );
}

export default Logout;
