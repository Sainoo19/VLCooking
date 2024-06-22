import React from "react";
import { FaSearch } from "react-icons/fa";
import Table from "../../components/Table";

export default function Dashboard() {
	return (
		<div className="flex ">
			<div className="columns-3xs w-13">
				<div className="bg-slate-600 text-white">
					<nav>
						{/* Content */}
						<div className="h-screen">
							<p className=" pl-4 h-10 text-2xl text-center">Admin Page</p>
							<p className=" pl-4 h-10 text-xl clickable hover:bg-slate-300">Recipe</p>
							<p className=" pl-4 h-10 text-xl hover:bg-slate-300">Users</p>
							<p className=" pl-4 h-10 text-xl hover:bg-slate-300">Products</p>
						</div>
						{/* Footer */}
						<div>
							<div className="text-xl hover:underline">Log Out</div>
						</div>
					</nav>
				</div>
			</div>
			<div className="columns-1">
				<h1 className="text-3xl">Manage Recipe</h1>
				<div className="flex gap-4">
					<button className="rounded bg-cyan-300 px-3 py-1 text-center">Create New</button>
					<form className="bg-slate-100 p-3 rounded-lg flex items-center">
						<input
							type="text"
							placeholder="Search..."
							className="bg-transparent focus:outline-none w-24 sm:w-24"
						/>
						<FaSearch className="text-slate-600" />
					</form>
				</div>
				<Table Name="Recipe" />
			</div>
		</div>
	);
}
