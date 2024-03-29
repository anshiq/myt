import React, { Suspense } from "react";
import getOneTaskDetails from "@/lib/getOneTaskDetail";
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
  const oneTaskVideoDetails: videoDetails = await getOneTaskDetails(videoId);
  return (
    <>
      <div className="flex mt-6 w-full flex-col">
        <Suspense fallback={<section> Loading .....</section>}>
          <Video videoDetails={oneTaskVideoDetails} />
        </Suspense>
        <div className="grid w-5/6 sm:grid-cols-2 lg:grid-cols-4  gap-1 items-center justify-center mx-auto ">
          <Suspense
            fallback={<section>loading recommendations........</section>}
          >
            <Recommendations allvideos={allvideos} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default page;
