import getAllVideos from "@/lib/getAllVideos";
import Card from "./component/card";
export default async function Body() {
 const data =  await getAllVideos()
  const content = data. 
  return (
    <>
      <div className="">
      </div>
    </>
  );
}
