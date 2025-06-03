"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="w-full py-18 flex flex-1 justify-center items-center text-center">
      <div className="my-6 py-0 md:py-4 relative">
        <div className="absolute -top-6 left-4 md:-left-6 md:-top-3">
          <Image
            alt="Thought Spring Academy"
            src={`/assets/abstract_line.png`}
            width={30}
            height={30}
            className="w-8 h-8"
          />
        </div>

        <div className="shadow-lg rounded bg-white flex px-5 py-3 mx-10 md:mx-0 justify-center items-center">
          <>
            <div className="bg-[var(--zap-bg)] rounded w-fit">
              <Image
                alt="Thought Spring Academy"
                src={`/assets/zapp.png`}
                width={34}
                height={34}
                className="w-10 h-10"
              />
            </div>
          </>
          <h6 className="text-md md:text-3xl font-semibold">
            <span className="text-[var(--theme)] pl-3 pr-2 md:px-3">
              Unlock
            </span>
            Your Creative Potential
          </h6>
        </div>

        <div className="py-5 space-y-4">
          <h6 className="font-medium text-2xl">
            with Online Design and Development Courses.
          </h6>
          <h6 className="text-sm md:text-md">
            Learn from Industry Experts and Enhance Your Skills.
          </h6>
        </div>

        <button
          className="bg-[var(--theme)] text-white text-sm px-5 py-2 rounded cursor-pointer"
          onClick={() => router.push("/courses")}
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
