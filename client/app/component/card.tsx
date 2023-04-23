import Image from "next/image";
import Link from "next/link";
type Props = {
  data: videoDetails;
};
export default function Card({ data }: Props) {
  return (
    <>
      <Link
        key={data._id}
        className="flex my-4 flex-col items-start justify-center"
        href={`/${data._id}`}
      >
        <div className="sm:h-52 h-48 overflow-hidden bg-gray-900">
          <Image
            className="h-full"
            alt="error"
            width={320}
            height={180}
            src={`http://127.0.0.1:8080/${data._id}.jpg`}
          />
        </div>
        <h2>{`${data.name}`}</h2>
        <h3>{`${data.description}`}</h3>
      </Link>
    </>
  );
}
