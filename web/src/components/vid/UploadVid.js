import React, { useState, useContext } from "react";
import { VideoContext } from "../../contextApi/context";
const FileUpload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [details, setDetails] = useState({
    title: "hi",
    description: "i am a video",
  });
  const videoUploadContext = useContext(VideoContext);
  const handleImageFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleVideoFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };
  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("video", videoFile);
    formData.append("name", details.title);
    formData.append("description", details.description);
    videoUploadContext.UploadVid(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label> Image</label>
      <input type="file" onChange={handleImageFileChange} />
      <label> Video </label>
      <input type="file" onChange={handleVideoFileChange} />
      <input
        type="text"
        placeholder="Title"
        value={details.title}
        name="title"
        onChange={handleDetailChange}
      />
      <textarea
        placeholder="Description"
        value={details.description}
        name="description"
        onChange={handleDetailChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
