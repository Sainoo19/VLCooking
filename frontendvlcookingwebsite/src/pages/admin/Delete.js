import React from "react";

export default function Delete() {
  return (
    <div className="max-w-6xl mx-auto p-2 sm:text-lg">
      <div className=" p-3 flex flex-col gap-3 my-10">
        <h1 className="font-bold text-3xl ">Delete</h1>
        <p className="text-gray-500">breadcrumbs</p>
      </div>
      <form className="flex flex-col gap-4 min-w-2xl items-center">
        <div className="flex flex-col w-full">
          <div className="p-3">
            <h2 className=" font-bold p-3 border-b border-black">
              Delete User With Id:2
            </h2>
          </div>

          <div className="p-3 rounded-lg bg-red-100 gap-3 p-3">
            <p className="text-red-800">
              Are you sure you want to delete user this user?
              <br />
            </p>
          </div>

          <div className="flex flex-row ml-5 mt-6 my-3 gap-4 ">
            <button className="bg-red-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
              Delete
            </button>
            <button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
