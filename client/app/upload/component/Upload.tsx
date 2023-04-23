"use client";
import uploadVideo from "@/lib/uploadVideo";
import React from "react";
import { useState } from "react";
function Upload() {
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [details, setDetails] = useState({ title: "", description: "" });
  const handleFileChange = (e: any) => {
    //    console.log(e.target.files[0])
    //    console.log(e.target.name)

    if (e.target.name == "image") setImage(e.target.files[0]);
    else if (e.target.name == "video") setVideo(e.target.files[0]);
  };
  const handleDetails = (e: any) => {
    const { name, value } = e.target;
    setDetails((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", details.title);
    formdata.append("description", details.description);
    formdata.append("image", image);
    formdata.append("video", video);
    uploadVideo(formdata);
  };
  return (
    <form className="flex flex-col justify-center " onSubmit={handleSubmit}>
      <label> Upload Image Here</label>
      <input required name="image" onChange={handleFileChange} type="file" />
      <br className="my-2" />
      <label> Upload Video here </label>
      <input required name="video" onChange={handleFileChange} type="file" />
      <br className="my-2" />
      <label> title here</label>
      <input
        required
        value={details.title}
        onChange={handleDetails}
        name="title"
        type="text"
      />
      <br className="my-2" />
      <label> description here</label>
      <input
        required
        value={details.description}
        onChange={handleDetails}
        name="description"
        type="text"
      />
      <br className="my-2" />
      <button type="submit"> Publish</button>
    </form>
  );
}

export default Upload;
