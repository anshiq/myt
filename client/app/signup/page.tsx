import { Metadata } from "next";
import Signup from "./component/Signup";
export const metadata: Metadata = {
  title: "My yt Signup ",
  description: " official signup page of my yt ",
};
export default function page() {
  return (
    <div className="flex w-full min-h-screen border-4 border-red-900 justify-center items-center">
      <Signup />
    </div>
  );
}
