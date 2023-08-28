"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import DeleteVideo from "@/lib/DeleteVideo";

type Props = {
  eachVideo: videoDetails;
  token: string;
};
function VideoCard({ eachVideo, token }: Props) {
  const deleteVideo = async () => {
    const response = await DeleteVideo(eachVideo._id, token.toString());
    if (response) {
      if (response.delete) {
        alert(response.name + " successfully deleted");
        window.location.replace("/user");
      } else {
        alert("the giving video don't exist ");
        window.location.replace("/user");
      }
    } else {
      localStorage.removeItem("myytkey");
      window.location.replace("/login");
    }
  };

  return (
    <div className="border-[1px] p-1 flex items-center flex-col">
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
            src={`${process.env.backend_url}/${eachVideo._id}.jpg`}
          />
        </div>
        <h2>{`${eachVideo.name}`}</h2>
        <h3>{`${eachVideo.description}`}</h3>
      </Link>
      <button
        className="  border-2 border-gray-500 p-3 hover:bg-red-700 "
        onClick={deleteVideo}
      >
        {" "}
        Delete Video
      </button>
    </div>
  );
}

export default VideoCard;
