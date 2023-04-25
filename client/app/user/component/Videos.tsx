import UserVideos from "@/lib/UserVideos";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import getAllVideos from "@/lib/getAllVideos";


 function Videos() {
  const [content,setContent] = useState([])
  useEffect(() => {
    const localToken : string |null= localStorage.getItem('myytkey')
    if (localToken)
 {   const tokenData: tokenDetails = JSON.parse(localToken)
      console.log(tokenData)
    const getAllVideos = async () => {
      const videos: videoDetails[] = await UserVideos(tokenData.token);
      const data = videos.map((eachVideo: videoDetails) => (
        <>
          <Link
            key={eachVideo._id}
            className="flex my-4 flex-col items-start justify-center"
            href={`/${eachVideo._id}`}
          >
            <div className="sm:h-52 h-48 overflow-hidden bg-gray-900">
              <Image
                className="h-full"
                alt="error"
                width={320}
                height={180}
                src={`http://127.0.0.1:8080/${eachVideo._id}.jpg`}
              />
            </div>
            <h2>{`${eachVideo.name}`}</h2>
            <h3>{`${eachVideo.description}`}</h3>
          </Link>
        </>
      )
      
      );
      setContent(data)
    };

getAllVideos()
    }
  }, []);
  return (
    <>
    {content}
    </>
  );
}

export default Videos;
