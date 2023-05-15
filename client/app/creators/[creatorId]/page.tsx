import Card from "@/app/component/card";
import PulicUserVideos from "@/lib/PulicUserVideos";
import React from "react";

type Props = {
  params: { creatorId: string };
};

async function page({ params: { creatorId } }: Props) {
  const VideosData: videoDetails[] = await PulicUserVideos(creatorId);
  const content = VideosData.map((eachvideo: videoDetails) => {
    return <Card key={eachvideo._id} data={eachvideo} />;
  });
  return (
    <>
      <div className="pl-4 text-red-400 mt-20 ">{creatorId}</div>
      <div className="grid mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 items-center justify-center mx-auto ">
        {content.length > 0 ? content : "no content found"}
      </div>
    </>
  );
}

export default page;
