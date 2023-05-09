import Link from "next/link";
import AccountIcon from "./AccountIcon";
import Logout from "./Logout";
function SideMenu() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-1  mt-[1.3 rem] gap-y-2 w-[97%] ">
        <Link
          className="h-10 bg-gray-400 hover:bg-gray-300 flex justify-center items-center w-[97%]"
          href="/"
        >
          Home{" "}
        </Link>
        <Link
          className="h-10 bg-gray-400 flex justify-center items-center w-[97%]"
          href="/about"
        >
          About
        </Link>
        <AccountIcon />
        <Link
          className="h-10 bg-gray-400  flex justify-center items-center w-[97%]"
          target="_blank"
          href="mailto:sanshik33@gmail.com"
        >
          Contact
        </Link>
        <Logout />
      </div>
      <Link
        className="mb-12 h-24 bg-gray-400 flex justify-center items-center w-[97%]"
        href="https://github.com/anshiq/myt"
        target="_blank"
      >
        {" "}
        Github
      </Link>
    </>
  );
}

export default SideMenu;
