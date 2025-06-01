import Image from "next/image";
import React from "react";

const achievements = [
  {
    icon: "crown.png",
    title: "Trusted by Thousands",
    description:
      "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
  },
  {
    icon: "medal.png",
    title: "Market Standard Courses",
    description:
      "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
  },
  {
    icon: "mask.png",
    title: "Positive Student Feedback",
    description:
      "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
  },
  {
    icon: "bolt.png",
    title: "Industry Partnerships",
    description:
      "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
  },
];

const Achievements = () => {
  return (
    <div className="mx-1 md:mx-6 px-6 md:px-8 py-10">
      <div className="max-w-7xl space-y-2 pb-4">
        <h6 className="text-3xl font-semibold">Our Achievements</h6>
        <p className="text-sm">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements.
        </p>
      </div>
      <div className="pt-3 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg py-5 px-4.5"
          >
            <Image
              alt={achievement.title}
              src={`/assets/achievements/${achievement.icon}`}
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <h6 className="font-semibold text-lg pb-2 pt-3">
              {achievement.title}
            </h6>
            <p className="text-sm pb-2">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
