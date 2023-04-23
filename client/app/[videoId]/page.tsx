import React, { Suspense } from "react";
import Video from "./components/Video";
import Recommendations from "./components/Recommendations";
import getAllVideos from "@/lib/getAllVideos";

type Params = {
  params: {
    videoId: string;
  };
};

async function page({ params: { videoId } }: Params) {
  const allvideos: videoDetails[] = await getAllVideos();
  return (
    <>
      <div>
        <Suspense fallback={<section> Loading .....</section>}>
          <Video vidUrl={videoId} />
        </Suspense>
        <Recommendations allvideos={allvideos} />
      </div>
    </>
  );
}

export default page;
