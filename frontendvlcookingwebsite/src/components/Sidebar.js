import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="columns-3xs w-13 ">
        <div className="bg-slate-600 text-white h-full">
          <nav>
            {/* Content */}
            <div className="h-screen">
              <p className=" pl-4 h-10 text-2xl text-center">Admin Page</p>
              <Link to="/admin" className="">
                <p className=" pl-4 h-10 text-xl clickable hover:bg-slate-300">
                  Recipe
                </p>
              </Link>
              <Link to="/admin/users" className="">
                <p className=" pl-4 h-10 text-xl hover:bg-slate-300">Users</p>
              </Link>

              <Link to="/admin/products" className="">
                <p className=" pl-4 h-10 text-xl hover:bg-slate-300">
                  Products
                </p>
              </Link>
            </div>
            {/* Footer */}
            <div>
              <div className="text-xl hover:underline">Log Out</div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
