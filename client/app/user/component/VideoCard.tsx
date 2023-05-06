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
    }else{
 localStorage.removeItem('myytkey')
        window.location.replace("/login");
    }
  };

  return (
    <div>
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
      <button onClick={deleteVideo}> Delete Video</button>
    </div>
  );
}

export default VideoCard;
