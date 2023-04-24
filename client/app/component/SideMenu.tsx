import Link from "next/link";
import AccountIcon from "./AccountIcon";
function SideMenu() {
  return (
    <>
      <div className="flex flex-col items-center justify-between h-full fixed w-56 left-0 top-12 bg-red-600">
        <div className="flex flex-col justify-center items-center  mt-4 gap-y-2 w-full ">
          <Link className="h-10 bg-green-900 flex justify-center items-center w-full" href="/">
            Home{" "}
          </Link>
          <Link className="h-10 bg-green-900 flex justify-center items-center w-full" href="/">
            About
          </Link>
            <AccountIcon/>
          <Link className="h-10 bg-green-900  flex justify-center items-center w-full" href="/">
            Contact
          </Link>
        </div>
        <Link className="mb-12 h-24 bg-green-900 flex justify-center items-center w-full" href="/">
          {" "}
          Dev Portfolio
        </Link>
      </div>
      </>
  );
}

export default SideMenu;
