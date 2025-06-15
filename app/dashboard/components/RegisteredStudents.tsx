import React from "react";

const RegisteredStudents = () => {
  return (
    <div>
      <h6 className="text-lg font-semibold mb-4 border-b-2 border-[var(--theme)] w-fit pr-4 pb-1">
        Registered Students
      </h6>
      <div className="w-full">
        <table className="table table-auto w-full text-sm text-left text-gray-500 border border-slate-200">
          <thead className="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sl.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Registered
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <td className="px-6 py-2" scope="row">
                1
              </td>
              <td className="px-6 py-2" scope="row">
                Kousik Kayal
              </td>
              <td className="px-6 py-2" scope="row">
                kousikkayal.73@gmail.com
              </td>
              <td className="px-6 py-2" scope="row">
                7980566783
              </td>
              <td className="px-6 py-2" scope="row">
                CA Final
              </td>
              <td className="px-6 py-2" scope="row">
                15-03-2025 23:31
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredStudents;
