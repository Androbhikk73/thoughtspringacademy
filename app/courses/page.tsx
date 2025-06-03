import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const courseList = [
  {
    title: "ISC Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui at nibh hendrerit semper at eu lacus. Suspendisse vitae velit ipsum. Etiam rutrum justo nec tellus mollis, sed sodales nunc porta. Curabitur a urna non lacus tempor tempor. In hac habitasse platea dictumst. Mauris et risus justo. Phasellus ullamcorper risus at libero facilisis gravida. Phasellus sed eros ultrices, lobortis leo ut, lobortis mauris. Fusce tincidunt sit amet libero id vestibulum. Ut fringilla lectus in felis rhoncus luctus. Morbi eget leo ex. Praesent posuere semper elementum.",
    timeline: "12 months",
    curriculum: [
      {
        title: "Introduction to HTML",
      },
      {
        title: "Styling with CSS",
      },
      {
        title: "Introduction to Responsive Design",
      },
      {
        title: "Design Principles for Web",
      },
      {
        title: "Building a Basic Website",
      },
    ],
  },
  {
    title: "CBSE Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui at nibh hendrerit semper at eu lacus. Suspendisse vitae velit ipsum. Etiam rutrum justo nec tellus mollis, sed sodales nunc porta. Curabitur a urna non lacus tempor tempor. In hac habitasse platea dictumst. Mauris et risus justo. Phasellus ullamcorper risus at libero facilisis gravida. Phasellus sed eros ultrices, lobortis leo ut, lobortis mauris. Fusce tincidunt sit amet libero id vestibulum. Ut fringilla lectus in felis rhoncus luctus. Morbi eget leo ex. Praesent posuere semper elementum.",
    timeline: "12 months",
    curriculum: [
      {
        title: "Introduction to HTML",
      },
      {
        title: "Styling with CSS",
      },
      {
        title: "Introduction to Responsive Design",
      },
      {
        title: "Design Principles for Web",
      },
      {
        title: "Building a Basic Website",
      },
    ],
  },
  {
    title: "CA Foundation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui at nibh hendrerit semper at eu lacus. Suspendisse vitae velit ipsum. Etiam rutrum justo nec tellus mollis, sed sodales nunc porta. Curabitur a urna non lacus tempor tempor. In hac habitasse platea dictumst. Mauris et risus justo. Phasellus ullamcorper risus at libero facilisis gravida. Phasellus sed eros ultrices, lobortis leo ut, lobortis mauris. Fusce tincidunt sit amet libero id vestibulum. Ut fringilla lectus in felis rhoncus luctus. Morbi eget leo ex. Praesent posuere semper elementum.",
    timeline: "12 months",
    curriculum: [
      {
        title: "Introduction to HTML",
      },
      {
        title: "Styling with CSS",
      },
      {
        title: "Introduction to Responsive Design",
      },
      {
        title: "Design Principles for Web",
      },
      {
        title: "Building a Basic Website",
      },
    ],
  },
  {
    title: "Costing Foundation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui at nibh hendrerit semper at eu lacus. Suspendisse vitae velit ipsum. Etiam rutrum justo nec tellus mollis, sed sodales nunc porta. Curabitur a urna non lacus tempor tempor. In hac habitasse platea dictumst. Mauris et risus justo. Phasellus ullamcorper risus at libero facilisis gravida. Phasellus sed eros ultrices, lobortis leo ut, lobortis mauris. Fusce tincidunt sit amet libero id vestibulum. Ut fringilla lectus in felis rhoncus luctus. Morbi eget leo ex. Praesent posuere semper elementum.",
    timeline: "12 months",
    curriculum: [
      {
        title: "Introduction to HTML",
      },
      {
        title: "Styling with CSS",
      },
      {
        title: "Introduction to Responsive Design",
      },
      {
        title: "Design Principles for Web",
      },
      {
        title: "Building a Basic Website",
      },
    ],
  },
  {
    title: "CA Inter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui at nibh hendrerit semper at eu lacus. Suspendisse vitae velit ipsum. Etiam rutrum justo nec tellus mollis, sed sodales nunc porta. Curabitur a urna non lacus tempor tempor. In hac habitasse platea dictumst. Mauris et risus justo. Phasellus ullamcorper risus at libero facilisis gravida. Phasellus sed eros ultrices, lobortis leo ut, lobortis mauris. Fusce tincidunt sit amet libero id vestibulum. Ut fringilla lectus in felis rhoncus luctus. Morbi eget leo ex. Praesent posuere semper elementum.",
    timeline: "12 months",
    curriculum: [
      {
        title: "Introduction to HTML",
      },
      {
        title: "Styling with CSS",
      },
      {
        title: "Introduction to Responsive Design",
      },
      {
        title: "Design Principles for Web",
      },
      {
        title: "Building a Basic Website",
      },
    ],
  },
  {
    title: "Costing Inter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui at nibh hendrerit semper at eu lacus. Suspendisse vitae velit ipsum. Etiam rutrum justo nec tellus mollis, sed sodales nunc porta. Curabitur a urna non lacus tempor tempor. In hac habitasse platea dictumst. Mauris et risus justo. Phasellus ullamcorper risus at libero facilisis gravida. Phasellus sed eros ultrices, lobortis leo ut, lobortis mauris. Fusce tincidunt sit amet libero id vestibulum. Ut fringilla lectus in felis rhoncus luctus. Morbi eget leo ex. Praesent posuere semper elementum.",
    timeline: "12 months",
    curriculum: [
      {
        title: "Introduction to HTML",
      },
      {
        title: "Styling with CSS",
      },
      {
        title: "Introduction to Responsive Design",
      },
      {
        title: "Design Principles for Web",
      },
      {
        title: "Building a Basic Website",
      },
    ],
  },
  {
    title: "CA Final",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui at nibh hendrerit semper at eu lacus. Suspendisse vitae velit ipsum. Etiam rutrum justo nec tellus mollis, sed sodales nunc porta. Curabitur a urna non lacus tempor tempor. In hac habitasse platea dictumst. Mauris et risus justo. Phasellus ullamcorper risus at libero facilisis gravida. Phasellus sed eros ultrices, lobortis leo ut, lobortis mauris. Fusce tincidunt sit amet libero id vestibulum. Ut fringilla lectus in felis rhoncus luctus. Morbi eget leo ex. Praesent posuere semper elementum.",
    timeline: "12 months",
    curriculum: [
      {
        title: "Introduction to HTML",
      },
      {
        title: "Styling with CSS",
      },
      {
        title: "Introduction to Responsive Design",
      },
      {
        title: "Design Principles for Web",
      },
      {
        title: "Building a Basic Website",
      },
    ],
  },
  {
    title: "Costing Final",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui at nibh hendrerit semper at eu lacus. Suspendisse vitae velit ipsum. Etiam rutrum justo nec tellus mollis, sed sodales nunc porta. Curabitur a urna non lacus tempor tempor. In hac habitasse platea dictumst. Mauris et risus justo. Phasellus ullamcorper risus at libero facilisis gravida. Phasellus sed eros ultrices, lobortis leo ut, lobortis mauris. Fusce tincidunt sit amet libero id vestibulum. Ut fringilla lectus in felis rhoncus luctus. Morbi eget leo ex. Praesent posuere semper elementum.",
    timeline: "12 months",
    curriculum: [
      {
        title: "Introduction to HTML",
      },
      {
        title: "Styling with CSS",
      },
      {
        title: "Introduction to Responsive Design",
      },
      {
        title: "Design Principles for Web",
      },
      {
        title: "Building a Basic Website",
      },
    ],
  },
];

const Courses = () => {
  return (
    <>
      <NavBar />
      <div className="w-full px-8 pt-24 pb-14 border-b border-b-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-10 items-center">
          <div className="col-span-1 md:max-w-xl">
            <h6 className="text-2xl font-semibold">
              Online Courses on Chartered Account and Commerce
            </h6>
          </div>
          <div className="col-span-2">
            <p className="text-sm">
              Welcome to our online course page, where you can enhance your
              skills in design and development. Choose from our carefully
              curated selection of 10 courses designed to provide you with
              comprehensive knowledge and practical experience. Explore the
              courses below and find the perfect fit for your learning journey.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 px-8 space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="rounded-md p-6 border border-slate-200 shadow-xl bg-white"
          >
            <div className="pb-4 space-y-2">
              <h6 className="text-2xl font-semibold text-[var(--theme)]">
                {course.title}
              </h6>
              <p className="text-xs text-slate-500">{course.description}</p>
            </div>
            <div className="border border-[var(--theme)] px-3.5 py-2 w-fit rounded-md mb-4">
              <h6 className="text-[0.688rem] ">{course.timeline}</h6>
            </div>
            <div className="rounded-md border border-slate-200">
              <div className="border-b border-slate-200 py-2.5 px-5">
                <h6 className="text-sm font-bold">Curriculum</h6>
              </div>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-4 lg:grid-cols-6 px-4 py-6">
                {course.curriculum.map((curr, jndex) => (
                  <div key={jndex} className="border-r border-slate-100">
                    <h6 className="text-3xl font-bold pb-3 text-[var(--theme)]">
                      {(jndex + 1).toString().padStart(2, "0")}
                    </h6>
                    <h6 className="text-xs">{curr.title}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Courses;
