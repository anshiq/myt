import getOneTaskDetails from "@/lib/getOneTaskDetail";
import React from "react";
import Link from "next/link";
type Params = {
  vidUrl: string;
};
export default async function Video({ vidUrl }: Params) {
  const oneTaskVideoDetails:videoDetails = await getOneTaskDetails(vidUrl) 
  return (
    <>
      <div className="w-full items-center  justify-center">
        <video
          src={`http://127.0.0.1:8080/api/one/${vidUrl}`}
          className="sm:w-5/6 w-full mx-auto  h-auto"
          controls
        ></video>
      <div 
          className="sm:w-5/6 w-full mx-auto  h-auto pt-3"
        > <h1 className="font-bold">{oneTaskVideoDetails.name}</h1> <p> {oneTaskVideoDetails.description}</p> <p>User:<Link href='/'>{oneTaskVideoDetails.userId}</Link> </p> </div>
      </div>
    </>
  );
}
