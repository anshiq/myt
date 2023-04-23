import Link from "next/link";
import React from "react";

function SideMenu() {
  return (
    <>
      <div className="flex flex-col items-center justify-between h-full fixed w-56 left-0 top-12 bg-red-600">
        <div className="flex flex-col justify-center items-center  mt-4 gap-y-2 w-full ">
          <Link className="h-10 bg-green-900 text-center  w-full" href="/">
            Home{" "}
          </Link>
          <Link className="h-10 bg-green-900  text-center   w-full" href="/">
            About
          </Link>
          <Link className="h-10 bg-green-900 text-center   w-full" href="/">
            Account
          </Link>
          <Link className="h-10 bg-green-900 text-center   w-full" href="/">
            Contact
          </Link>
        </div>
        <Link className="mb-16" href="/">
          {" "}
          Dev Portfolio
        </Link>
      </div>
    </>
  );
}

export default SideMenu;
