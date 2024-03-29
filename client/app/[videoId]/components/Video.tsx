import React from "react";
import Link from "next/link";
type Params = {
  videoDetails: videoDetails;
};
export default function Video({ videoDetails }: Params) {
  return (
    <>
      <div className="w-full items-center  justify-center">
        <video
          src={`${process.env.backend_url}/api/one/${videoDetails._id}`}
          className="sm:w-5/6 w-full mx-auto  h-auto"
          controls
        ></video>
        <div className="sm:w-5/6 w-full mx-auto  h-auto pt-3">
          {" "}
          <h1 className="font-bold">{videoDetails.name}</h1>{" "}
          <div> {videoDetails.description}</div>{" "}
          <div>
            User:
            <Link
              className="text-red-400"
              href={`/creators/${videoDetails.userId}`}
            >
              {videoDetails.userId}
            </Link>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
