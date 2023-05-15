import UserVideos from "@/lib/UserVideos";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
function Videos() {
  const [content, setContent]: any = useState([]);
  useEffect(() => {
    const localToken: string | null = localStorage.getItem("myytkey");
    if (localToken) {
      const tokenData: tokenDetails = JSON.parse(localToken);
      //console.log(tokenData);
      const getVideos = async () => {
        const videos: videoDetails[] = await UserVideos(tokenData.token);
        const data = videos.map((eachVideo: videoDetails) => (
          <>
            <VideoCard eachVideo={eachVideo} token={tokenData.token} />
          </>
        ));
        setContent(data);
      };

      getVideos();
    }
  }, []);
  return (
    <>
      <div className="grid mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 items-center justify-center mx-auto ">
        {content}
      </div>
    </>
  );
}

export default Videos;
