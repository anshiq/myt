import getAllVideos from "@/lib/getAllVideos";
import Card from "./component/card";
export default async function Body() {
 const allVideosId =  await getAllVideos()
   const content  = allVideosId.map((eachId:videoDetails) =>(
   <>
       <Card data={eachId} /> 
      </>
   )) 
  return (

    <>
      <div className=" bg-green-700">
        {content}
      </div>
    </>
  );
}
