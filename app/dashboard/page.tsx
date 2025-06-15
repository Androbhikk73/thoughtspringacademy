"use client";

import React, { useState } from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import ContactedPersons from "./components/ContactedPersons";
import RegisteredStudents from "./components/RegisteredStudents";

const Dashboard = () => {
  const [tab, setTab] = useState("contact");

  return (
    <>
      <NavBar />
      <div className="w-full py-12 px-4">
        <div className="m-4 bg-white rounded shadow-2xl">
          <div className="grid grid-cols-4 gap-4 p-8">
            <div className="border-r border-slate-200 min-h-96">
              <div className="mx-6 border border-slate-200 rounded ">
                <div className="cursor-pointer">
                  <div
                    className="px-4 py-4 text-sm text-gray-700"
                    onClick={() => setTab("contact")}
                  >
                    Contacted Persons
                  </div>
                  <hr className="h-px bg-gray-200 border-0"></hr>
                  <div
                    className="px-4 py-4 text-sm text-gray-700"
                    onClick={() => setTab("registered")}
                  >
                    Registered Students
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              {tab === "contact" ? (
                <ContactedPersons />
              ) : (
                <RegisteredStudents />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
