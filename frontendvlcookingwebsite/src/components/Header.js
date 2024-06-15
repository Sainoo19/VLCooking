import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
	return (
		<header className="bg-slate-300 shadow-sm">
			<div className="flex justify-between items-center mx-auto p-3">
				<h1 className="font-bold text-xl">VlCooking</h1>
				{/* SearchBar */}
				<form className="bg-slate-100 p-3 rounded-lg flex items-center">
					<FaSearch className="text-slate-500 mr-2" />
					<input
						className="bg-transparent focus:outline-none"
						type="text"
						placeholder="Search..."
					/>
				</form>
				<ul className="flex justify-between gap-5 font-bold items-center">
					<li className="hidden sm:inline">About</li>
					<li className="hidden sm:inline">Login</li>
					<li className="hidden sm:inline">Sign Up</li>
					<button className="bg-slate-600 text-white rounded-lg p-1">Logout</button>
				</ul>
			</div>
		</header>
	);
}
