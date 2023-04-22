import { Metadata } from "next";
import Login from "./component/Login";

export const metadata: Metadata = {
  title: "My yt login",
  description: "official login page of my yt",
};

function page() {
  return (
    <div className="flex w-full min-h-screen border-4 border-red-900 justify-center items-center">
      <Login />
    </div>
  );
}

export default page;
