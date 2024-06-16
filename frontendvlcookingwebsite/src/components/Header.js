import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="bg-slate-200 shadow-md">
			<div className="flex justify-between items-center max-w-6xl mx-auto p-3">
				<Link to="/">
					<h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
						<span className="text-slate-500">VLU</span>
						<span className="text-slate-700">Cooking</span>
					</h1>
				</Link>
				{/* SearchBar */}
				<form className="bg-slate-100 p-3 rounded-lg flex items-center">
					<input
						type="text"
						placeholder="Search..."
						className="bg-transparent focus:outline-none w-24 sm:w-64"
					/>
					<FaSearch className="text-slate-600" />
				</form>
				<ul className="flex gap-4 items-center">
					<Link to="/" className="">
						<li className="hidden sm:inline text-slate-700 hover:underline font-semibold">Home</li>
					</Link>
					<Link to="/about">
						<li className="hidden sm:inline text-slate-700 hover:underline font-semibold">About</li>
					</Link>
					<Link to="/signin">
						<li className=" text-slate-700 hover:underline font-semibold">Sign in</li>
					</Link>
					<Link to="/signup">
						<button className="hover:underline font-semibold rounded-lg px-3 py-1 bg-slate-600 text-white">
							Sign up
						</button>
					</Link>
				</ul>
			</div>
		</header>
	);
}
