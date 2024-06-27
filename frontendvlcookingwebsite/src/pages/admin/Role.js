import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";

export default function Roles() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-3">
        <div className="flex flex-col ml-0 my-2">
          <h1 className="text-3xl font-bold">Manage Role</h1>
        </div>
        <div className="flex flex-row-reverse my-5">
          <form className="bg-slate-100 p-3 rounded-lg flex items-center w-80 mr-5">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-full"
            />
            <FaSearch className="text-slate-600 pl-1" />
          </form>
          <Link
            to="/admin/create/role"
            className="flex items-center justify-center mr-3 rounded-lg min-h-[48px] bg-cyan-300 px-3 py-1 text-center hover:bg-black hover:text-white"
          >
            Create New
          </Link>
        </div>
        <div className="flex ml-0">
          <Table Name="Role" />
        </div>
      </div>
    </div>
  );
}
