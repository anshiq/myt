"use client";
import uploadVideo from "@/lib/uploadVideo";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
function Upload() {
  const route = useRouter();
  const [image, setImage]: any = useState([]);
  const [video, setVideo]: any = useState([]);
  const [details, setDetails] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    const token: string | null = localStorage.getItem("myytkey");
    if (token) {
    } else {
      localStorage.removeItem("myytkey");
      route.push("/login");
    }
  });
  const handleFileChange = (e: any) => {
    if (e.target.files[0] > 5 * 1024 * 1024 && e.target.name == "video") {
      alert("video size is bigger than 5mb");
    }
    if (e.target.name == "image") setImage(e.target.files[0]);
    else if (e.target.name == "video") setVideo(e.target.files[0]);
  };
  const handleDetails = (e: any) => {
    const { name, value } = e.target;
    setDetails((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token: string | null = localStorage.getItem("myytkey");
    if (token) {
      const tokenDetails: tokenDetails = JSON.parse(token);
      const formdata = new FormData();
      formdata.append("name", details.title);
      formdata.append("description", details.description);
      formdata.append("image", image);
      formdata.append("video", video);

      const backend_url = process.env.backend_url;
      try {
        const response = await fetch(`${backend_url}/upload`, {
          method: "POST",
          headers: {
            token: tokenDetails.token,
          },
          body: formdata,
        });
        if (response.ok) {
          alert("files uploaded successfully");
          window.location.replace("/user");
        } else {
          alert("server side problem");
        }
      } catch (error) {
        alert("problem while uploading file");
      }
    } else {
      localStorage.removeItem("myytkey");
      route.push("/login");
      return;
    }
  };
  return (
    <form
      className="flex flex-col justify-center w-[90%] p-4 border-2 border-gray-500 sm:w-2/5  "
      onSubmit={handleSubmit}
    >
      <label> Upload Image Here</label>
      <input
        required
        name="image"
        className=" "
        onChange={handleFileChange}
        type="file"
      />
      <br className="my-2" />
      <label> Upload Video here </label>
      <input required name="video" onChange={handleFileChange} type="file" />
      <br className="my-2" />
      <label> title here</label>
      <input
        className="border-[1px] p-1 border-gray-700 "
        required
        value={details.title}
        onChange={handleDetails}
        placeholder="title of the video"
        name="title"
        type="text"
      />
      <br className="my-2" />
      <label> description here</label>
      <input
        required
        placeholder="description of the video"
        value={details.description}
        className="border-[1px] p-1 border-gray-700 "
        onChange={handleDetails}
        name="description"
        type="text"
      />
      <br className="my-2" />
      <button
        className="bg-gray-600 hover:bg-gray-500 p-1.5 mx-auto w-1/3"
        type="submit"
      >
        {" "}
        Publish
      </button>
    </form>
  );
}

export default Upload;
