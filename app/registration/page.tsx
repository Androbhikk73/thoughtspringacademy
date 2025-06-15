import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Input, { classes } from "../components/common/Input";

const Registration = () => {
  return (
    <>
      <NavBar />
      <div className="w-full py-12 px-4 min-h-[calc(100vh-300px)]">
        <div className="max-w-7xl mx-auto px-10 py-12 bg-white shadow-xl">
          <h6 className="text-lg font-semibold mb-4 border-b-2 border-[var(--theme)] w-fit pr-4 pb-1">
            Register Yourself
          </h6>
          <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8">
            <div className="">
              <label
                htmlFor="first_name"
                className="block text-sm/6 font-semibold"
              >
                First Name
              </label>
              <div className="mt-2">
                <Input
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder="Enter First name"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="last_name"
                className="block text-sm/6 font-semibold"
              >
                Last Name
              </label>
              <div className="mt-2">
                <Input
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="Enter Last name"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="email" className="block text-sm/6 font-semibold">
                Email address
              </label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="phone" className="block text-sm/6 font-semibold">
                Phone
              </label>
              <div className="mt-2">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="course" className="block text-sm/6 font-semibold">
                Course
              </label>
              <div className="mt-2">
                <select
                  name=""
                  id=""
                  aria-label="Course"
                  className={`${classes} appearance-none`}
                >
                  <option value="ISC Commerce">ISC Commerce</option>
                  <option value="CBSE Commerce">CBSE Commerce</option>
                  <option value="CA Foundation">CA Foundation</option>
                  <option value="Costing Foundation">Costing Foundation</option>
                  <option value="CA Inter">CA Inter</option>
                  <option value="Costing Inter">Costing Inter</option>
                  <option value="CA Final">CA Final</option>
                  <option value="Costing Final">Costing Final</option>
                </select>
              </div>
            </div>

            <div className="col-span-full text-center">
              <button className="bg-[var(--theme)] text-white text-sm px-5 py-2 rounded">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
