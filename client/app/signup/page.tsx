import { Metadata } from "next";
import Link from "next/link";
import Signup from "./component/Signup";
export const metadata: Metadata = {
  title: "My yt Signup ",
  description: " official signup page of my yt ",
};
export default function page() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center border-3 border-gray-500 items-center">
      <Signup />
      <Link
        className="  border-2 border-gray-500 p-3 hover:bg-gray-500 "
        href={"/login"}
      >
        Login{" "}
      </Link>
    </div>
  );
}
