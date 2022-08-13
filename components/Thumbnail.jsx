import Image from "next/image";
import { useEffect } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef, useState } from "react";
import { IMAGE_BASE_URL } from "../.config";

const Thumbnail = forwardRef(({ result }, ref) => {
  const delay = 3;
  const [data, setData] = useState("");
  const [bgLoading, setbgLoading] = useState("bg-[#082029]");
  useEffect(() => {
    let timer = setTimeout(() => setData(result), delay * 1000);

    return () => {
      setbgLoading("bg-slate-700");
      clearTimeout(timer);
    };
  }, [data, result]);

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer rounded-md transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <div className=" bg-slate-700 rounded-md">
        <div className={!data && "animate-pulse rounded-md"}>
          <Image
            className={`${bgLoading} rounded-t-md`}
            src={
              `${IMAGE_BASE_URL}${data.backdrop_path || data.poster_path}` ||
              `${IMAGE_BASE_URL}${data.poster_path}`
            }
            alt=""
            layout="responsive"
            width={1920}
            height={1080}
          />
          <div className="p-2">
            <p
              className={
                !data
                  ? `${bgLoading} h-8 rounded-md`
                  : `${bgLoading} truncate rounded-md max-w-md`
              }
            >
              {data.overview}
            </p>

            <h2
              className={
                !data
                  ? `${bgLoading} h-8 mt-1 rounded-md `
                  : `${bgLoading} mt-1 rounded-md text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold`
              }
            >
              {data.title || data.original_name}
            </h2>

            {data && (
              <p className="flex items-center opacity-0 group-hover:opacity-100">
                {data.media_type && `${data.media_type} • `}
                {data.release_date || data.media_type} •
                <ThumbUpIcon className="h-5 mx-2" /> {data.vote_count}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
