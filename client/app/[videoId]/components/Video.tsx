import React from "react";
type Params = {
  vidUrl: string;
};
export default function Video({ vidUrl }: Params) {
  return (
    <>
      <div className="w-full items-center  justify-center">
        <video
          src={`http://127.0.0.1:8080/api/one/${vidUrl}`}
          className="sm:w-5/6 w-full mx-auto  h-auto"
          controls
        ></video>
      </div>
    </>
  );
}
