import Image from "next/image";
import React from "react";

const Container = () => {
  return (
    <div className="w-full mx-auto max-w-7xl pt-6 pb-10">
      <div>
        <Image
          alt="Thought Spring Academy Container"
          src={`/assets/container.png`}
          width={22}
          height={22}
          className="w-full h-full"
          quality={100}
          unoptimized
        />
      </div>
    </div>
  );
};

export default Container;
