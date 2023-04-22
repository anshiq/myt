import { Metadata } from "next";
import Link from "next/link";
import Signup from "./component/Signup";
export const metadata: Metadata = {
  title: "My yt Signup ",
  description: " official signup page of my yt ",
};
export default function page() {
  return (
    <div className="flex flex-col w-full min-h-screen border-4 border-red-900 justify-center items-center">
      <Signup />
      <Link href={"/login"}>Login </Link>
    </div>
  );
}
