import Image from "next/image";
import React from "react";

const courses = [
  {
    thumbnail: "web_design.png",
    timeline: "12 months",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    thumbnail: "ux_design.png",
    timeline: "12 months",
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
  },
  {
    thumbnail: "app_design.png",
    timeline: "12 months",
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
  },
  //   {
  //     thumbnail: "graphic_design.png",
  //     timeline: "12 months",
  //     title: "Graphic Design for Beginners",
  //     description:
  //       "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
  //   },
];

const Courses = () => {
  return (
    <div className="mx-1 md:mx-6 px-6 md:px-8 py-10">
      <div className="block md:flex justify-between items-center">
        <div className="max-w-7xl space-y-2 pb-4">
          <h6 className="text-3xl font-semibold">Our Courses</h6>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="text-right">
          <button className="bg-[var(--theme)] text-white text-sm px-5 py-2 rounded">
            View All
          </button>
        </div>
      </div>
      <div className="pt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {courses.map((course, index) => (
          <div
            className="flex shadow-lg border-t border-r border-t-slate-200 border-r-slate-200 rounded-md "
            key={index}
          >
            <div className="flex-none w-48 relative">
              <Image
                alt={course.title}
                src={`/assets/courses/${course.thumbnail}`}
                width={50}
                height={50}
                className="absolute inset-0 w-full h-full object-cover rounded-l-md"
                unoptimized
              />
            </div>
            <div className="flex-auto p-6 space-y-3.5">
              <h1 className="flex-auto text-xl font-semibold text-wrap">
                {course.title}
              </h1>
              <h6 className="w-fit text-[0.625em] p-2 rounded-md border border-slate-200 bg-[var(--hover)]">
                {course.timeline}
              </h6>
              <p className="text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
