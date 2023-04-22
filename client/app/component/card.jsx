import Image from "next/image";
import Link from "next/link";
export default function Card(data) {
  console.log(data);
  return (
    <>
      <Link
        className="vidBox px-2 bg-red-50 w-full mobile:h-105 mobile:w-120 my-2 gridXs:w-115 gridXs:h-101  gridSm:h-105 gridSm:w-120"
        href={`/vid/${data._id}`}
      >
        <div className="w-full">
          <Image
            className="w-full"
            src={`https://static-cse.canva.com/blob/1024437/1600w-wK95f3XNRaM.jpg`}
          />
        </div>
        <div>
          <h2>
            {" "}
            hi there ima ima brown boy hule hule hi th hi there ima ima brown
            boy hule hule hi there ima ima brown boy hule hule{" "}
          </h2>
        </div>
        <div>
          <h3>{"data.description"}</h3>
        </div>
      </Link>
    </>
  );
}
