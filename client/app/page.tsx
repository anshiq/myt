import getAllVideos from "@/lib/getAllVideos";
import Card from "./component/card";
export default async function Body() {
  const allVideosId: videoDetails[] = await getAllVideos();
  const content = allVideosId.map((eachId: videoDetails) => (
    <>
      <Card data={eachId} />
    </>
  ));
  return (
    <>
      <div className="grid mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 items-center justify-center mx-auto ">
        {content.length>0?content:"no content found"}
      </div>
    </>
  );
}
