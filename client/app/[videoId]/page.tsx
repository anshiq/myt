import React, { Suspense } from "react";
import Video from "./components/Video";

type Params = {
  params: {
    videoId: string;
  };
};

function page({ params: { videoId } }: Params) {
  return (
    <>
      <Suspense fallback={<section> Loading .....</section>}>
        <Video vidUrl={videoId} />
      </Suspense>
    </>
  );
}

export default page;
