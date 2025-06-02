import React from "react";

const benefits = [
  {
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations",
  },
  {
    title: "Expert Instruction",
    description:
      "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    title: "Diverse Course Offeringse",
    description:
      "Explore a wide range of design and development courses covering various topics.",
  },
  {
    title: "Updated Curriculum",
    description:
      "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    title: "Practical Projects and Assignments",
    description:
      "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    title: "Interactive Learning Environment",
    description:
      "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

const Advantages = () => {
  return (
    <div className="mx-1 md:mx-6 px-6 md:px-8 py-10">
      <div className="max-w-7xl space-y-2 pb-4">
        <h6 className="text-3xl font-semibold">Advantages with us</h6>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          minima quia consequuntur, in voluptas necessitatibus odit est neque
          repellendus, fugiat quibusdam aliquid impedit quos autem natus
          expedita fugit quisquam obcaecati.
        </p>
      </div>
      <div className="pt-3 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg py-5 px-4">
            <h6 className="text-4xl font-bold text-right pb-3">
              {(index + 1).toString().padStart(2, "0")}
            </h6>
            <h6 className="font-semibold text-lg pb-2 px-2">{benefit.title}</h6>
            <p className="text-sm px-2 pb-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
