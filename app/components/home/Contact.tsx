import React from "react";
import Input from "../common/Input";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-white shadow-2xl rounded-md py-6 my-6">
      <div className="block sm:hidden max-w-7xl px-4">
        <h6 className="text-3xl font-semibold">Request call back</h6>
      </div>
      <div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-4">
        <div className="col-span-2 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
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

            <div className="sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm/6 font-semibold"
              >
                Last name
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

            <div className="sm:col-span-3">
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

            <div className="sm:col-span-3">
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

            <div className="col-span-full">
              <label
                htmlFor="subject"
                className="block text-sm/6 font-semibold"
              >
                Subject
              </label>
              <div className="mt-2">
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Your Query Subject"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold"
              >
                Message
              </label>
              <div className="mt-2">
                <Input
                  id="message"
                  name="message"
                  type="textarea"
                  placeholder="Enter Your Query Message..."
                />
              </div>
            </div>

            <div className="col-span-full text-center">
              <button className="bg-[var(--theme)] text-white text-sm px-5 py-2 rounded">
                Send Your Message
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full space-y-4 flex min-h-full flex-1 flex-col justify-center">
          <div className="text-center">
            <h6>or</h6>
            <h6 className="text-xl font-semibold">Talk to the Professional</h6>
          </div>
          <div className="w-full items-center justify-center flex">
            <button className="bg-[var(--theme)] text-white text-sm px-5 py-3 rounded shadow-xl flex justify-around space-x-2 items-center cursor-pointer">
              <PhoneIcon aria-hidden="true" className="block size-5" />

              <Link href="tel:0000000000">
                <h6 className="text-sm">Call now directly</h6>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
