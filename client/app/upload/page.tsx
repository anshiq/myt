import { Metadata } from "next";
import Upload from "./component/Upload";

export const metadata: Metadata = {
  title: "Upload Video content",
  description: "please enter your description",
};
export default function page() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Upload />
      </div>
    </>
  );
}
