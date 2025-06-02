"use client";

import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Image from "next/image";
import Input from "../components/common/Input";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const loginAdmin = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <NavBar />
      <div className="min-h-[calc(70vh-10px)]">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-14 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center items-center">
              <div className="bg-[var(--theme)] p-1.5 rounded mx-auto w-fit">
                <Image
                  alt="Thought Spring Academy"
                  src={`/assets/logo.png`}
                  width={60}
                  height={60}
                  className="w-10 h-10"
                />
              </div>
            </div>
            <h2 className="mt-10 text-center text-2xl/9 font-semibold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-semibold">
                Email address
              </label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-semibold"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[var(--theme)] px-3 py-1.5 text-sm/6 text-white shadow-xs"
                onClick={() => loginAdmin()}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
