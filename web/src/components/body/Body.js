import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import k from './newsapi'
export default function Body() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1/api/all", {
      method: "get",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        return;
      });
  }, [""]);
  const allposts = k.map((data) => {
    return (
      <a className="vidBox px-2 bg-red-50 w-full mobile:h-105 mobile:w-120 my-2 gridXs:w-115 gridXs:h-101  gridSm:h-105 gridSm:w-120" href={`/vid/${data._id}`} >
        <div className="w-full">
          <img className="w-full" src={`https://static-cse.canva.com/blob/1024437/1600w-wK95f3XNRaM.jpg`} />
        </div>
        <div > 
          <h2> hi there ima ima brown boy hule hule hi th hi there ima ima brown boy hule hule hi there ima ima brown boy hule hule </h2>
        </div>
        <div>
          <h3>{'data.description'}</h3>
        </div>
      </a>
    );
  });
  return (
    <>
      <div  className="grid grid-cols-1 gridXs:grid-cols-2 gridMd:grid-cols-3 gridLd:grid-cols-4">{allposts}</div>
      </>
  );
}
