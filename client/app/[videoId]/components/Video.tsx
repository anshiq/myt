"use client";
import React from "react";
type Params = {
  vidUrl: string;
};
export default function Video({ vidUrl }: Params) {
  return (
    <>
      <div className="border-4 border-orange-400 flex flex-col w-1/2 content-center items-center ">
        <video
          src={`http://127.0.0.1:8080/api/one/e`}
          className="w-1/2  h-fit "
          controls
        ></video>
      </div>
    </>
  );
}
