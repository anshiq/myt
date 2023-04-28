import UserVideos from "@/lib/UserVideos";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
function Videos() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const localToken: string | null = localStorage.getItem("myytkey");
    if (localToken) {
      const tokenData: tokenDetails = JSON.parse(localToken);
      console.log(tokenData);
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
  return <>{content}</>;
}

export default Videos;
