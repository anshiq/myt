import { Metadata } from "next";
import Login from "./component/Login";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My yt login",
  description: "official login page of my yt",
};

function page() {
  return (
    <div className="flex flex-col w-full min-h-screen border-4 border-red-900 justify-center items-center">
      <Login />
      <Link href={"/signup"}>Signup</Link>
    </div>
  );
}

export default page;
