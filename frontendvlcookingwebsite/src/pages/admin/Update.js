import React from "react";

export default function Update() {
  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className=" p-3 flex flex-col gap-3 my-10">
        <h1 className="font-bold text-3xl ">Update</h1>
        <p className="text-gray-500">breadcrumbs</p>
      </div>
      <form className="flex flex-col gap-4 min-w-2xl items-center">
        <div className="flex flex-col w-full">
          <div className="w-full p-4">
            <p className="p-2">Email:</p>
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div className="w-full p-4">
            <p className="p-2">Phone Number:</p>
            <input
              type="tel"
              placeholder="Phone"
              className="border p-3 rounded-lg w-full"
              pattern="[0-9]{10}"
            />
          </div>

          <div className="w-full p-4">
            <p className="p-2">Full Name:</p>
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div className="w-full p-4">
            <p className="p-2">Address:</p>
            <input
              type="text"
              placeholder="Address"
              className="border p-3 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-row gap-4 ">
            <button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
