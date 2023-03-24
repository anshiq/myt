import { useParams } from "react-router-dom";
const PlayVid = () => {
  let { id } = useParams();
  let link = `http://localhost/api/one/${id}`;
  return (
    <>
      <div className="playvid-container"> 
        <div className="playvid">
         <div className="videoplayer"></div> 
         <div className="video-name"></div> 
         <div className="video-details"></div> 
         <div className="video-comments"></div> 
         <div className="video-recommendations"></div> 
        </div>
      </div>

      </>
  );
};
export default PlayVid;
