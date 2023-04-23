"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
type prop = {
  allvideos: videoDetails[];
};

function Recommendations({ allvideos }: prop) {
  const content = allvideos.map((eachVideo: videoDetails) => (
    <>
      <Link
        key={eachVideo._id}
        className="flex my-4  flex-col items-center px-1 pb-4 w-fit h-fit shadow-xl bg-gray-300 justify-center"
        href={`/${eachVideo._id}`}
      >
        <div className="sm:h-52 h-40 overflow-hidden bg-gray-900">
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
  ));
  return <>{content}</>;
}

export default Recommendations;
