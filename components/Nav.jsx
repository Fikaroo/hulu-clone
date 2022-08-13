import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 2xl:text-2xl lg:text-xl text-xl whitespace-nowrap space-x-10 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 py-1 cursor-pointer transition duration-100 transform hover:text-white hover:scale-125 active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
