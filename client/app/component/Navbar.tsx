import React from "react";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import Search from "./Search";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <nav className="flex px-4 bg-red-500  flex-row items-center  w-full">
        <div>
          <VscMenu size="2.3rem" />
        </div>
        <div className="flex ml-6 flex-row bg-green-500 justify-between w-full">
          <Image
            width={200}
            height={50}
            alt="My yt"
            className="h-12"
            src="/titleicon.png"
          />
          <Search />
          <div></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
