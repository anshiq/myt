import React, { Suspense } from "react";
import Link from "next/link";
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
          {/* <div className="w-full items-center  justify-center"> */}
          {/*   <video */}
          {/*     src={`http://127.0.0.1:8080/api/one/${videoId}`} */}
          {/*     className="sm:w-5/6 w-full mx-auto  h-auto" */}
          {/*     controls */}
          {/*   ></video> */}
          {/* <div  */}
          {/*     className="sm:w-5/6 w-full mx-auto  h-auto pt-3" */}
          {/*   > <h1 className="font-bold">{oneTaskVideoDetails.name}</h1> <p> {oneTaskVideoDetails.description}</p> <p>User:<Link href='/'>{oneTaskVideoDetails.userId}</Link> </p> </div> */}
          {/* </div> */}
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
