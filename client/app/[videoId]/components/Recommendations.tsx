"use client";
import getAllVideos from "@/lib/getAllVideos";
import React from "react";
import Image from "next/image";
import Link from "next/link";
type prop = {
  allvideos: videoDetails[];
};

function Recommendations({ allvideos }: prop) {
  const content = allvideos.map((eachVideo: videoDetails) => (
    <>
      <Link href={`/${eachVideo._id}`}>
        <Image
          className="h-full"
          alt="error"
          width={320}
          height={180}
          src={`http://127.0.0.1:8080/${eachVideo._id}.jpg`}
        />
        <div>
          <h1>{eachVideo.name}</h1>
        </div>
      </Link>
    </>
  ));
  return <div>{content}</div>;
}

export default Recommendations;
