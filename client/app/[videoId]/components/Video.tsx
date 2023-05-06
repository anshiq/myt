import React from "react";
import Link from "next/link";
type Params = {
  videoDetails: videoDetails;
};
export default function Video({ videoDetails}: Params) {
  return (
    <>
      <div className="w-full items-center  justify-center">
        <video
          src={`http://127.0.0.1:8080/api/one/${videoDetails._id}`}
          className="sm:w-5/6 w-full mx-auto  h-auto"
          controls
        ></video>
      <div 
          className="sm:w-5/6 w-full mx-auto  h-auto pt-3"
        > <h1 className="font-bold">{videoDetails.name}</h1> <p> {videoDetails.description}</p> <p>User:<Link href='/'>{videoDetails.userId}</Link> </p> </div>
      </div>
    </>
  );
}
