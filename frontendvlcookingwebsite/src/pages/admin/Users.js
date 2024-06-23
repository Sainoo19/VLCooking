import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";

export default function Users() {
  return (
    <div className="flex max-w-full overflow-x-auto sm:text-lg">
      <Sidebar />
      <div className=" max-w-6xl  p-3 sm:text-lg">
        <div className="flex flex-col items-center mx-2">
          <h1 className="text-3xl font-bold">Manage Users</h1>
        </div>
        <div className="flex flex-row-reverse gap-4 w-full my-5">
          <form className="bg-slate-100 w-78 p-3 rounded-lg flex items-center mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none min-w-72   sm:w-24"
            />
            <FaSearch className="text-slate-600 pl-1" />
          </form>
          <Link
            to="/admin/create/user"
            className="flex items-center justify-center rounded-lg min-h-[48px] bg-cyan-300 px-3 py-1 text-center hover:bg-black hover:text-white"
          >
            Create New
          </Link>
        </div>
        <Table Name="User" />
      </div>
    </div>
  );
}
