import Image from "next/image";
import Link from "next/link";
type Props = {
  data : videoDetails
}
export default function Card({data}:Props) {
  return (
    <>
      <Link
        className="vidBox px-2 bg-red-50 w-full mobile:h-105 mobile:w-120 my-2 gridXs:w-115 gridXs:h-101  gridSm:h-105 gridSm:w-120"
        href={`/vid/${data._id}`}
      >
        <div className="w-full">
          <Image
            className="w-full"
            alt="error"
            width={320}
            height={180}
            src={`http://127.0.0.1:8080/${data._id}.jpg`}
          />
        </div>
        <div>
          <h2>
            {`${data.name}`}
          </h2>
        </div>
        <div>
          <h3>{`${data.description}`}</h3>
        </div>
      </Link>
    </>
  );
}
