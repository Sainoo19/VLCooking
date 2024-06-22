import React from "react";

export default function Sidebar() {
	return (
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
	);
}
