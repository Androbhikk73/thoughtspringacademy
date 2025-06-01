import Image from "next/image";
import React from "react";

const goals = [
  {
    icon: "bag.png",
    title: "Provide Practical Skills",
    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    icon: "book.png",
    title: "Foster Creative Problem-Solving",
    description:
      "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
  },
  {
    icon: "puzzle.png",
    title: "Promote Collaboration and Community",
    description:
      "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
  },
  {
    icon: "alert.png",
    title: "Stay Ahead of the Curve",
    description:
      "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
  },
];

const Goals = () => {
  return (
    <div className="mx-1 md:mx-6 px-6 md:px-8 py-10">
      <div className="max-w-7xl space-y-2 pb-4">
        <h6 className="text-3xl font-semibold">Our Goals</h6>
        <p className="text-sm">
          At Thought Spring Academy, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact.
        </p>
      </div>
      <div className="pt-3 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg py-5 px-4.5"
          >
            <Image
              alt={goal.title}
              src={`/assets/goals/${goal.icon}`}
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <h6 className="font-semibold text-lg pb-2 pt-3">{goal.title}</h6>
            <p className="text-sm pb-2">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
