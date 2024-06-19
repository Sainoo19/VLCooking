import React from "react";

export default function Sidebar() {
	return (
		<div className="bg-slate-600 text-white ps-4">
			<nav>
				{/* Content */}
				<div className="h-screen ">
					<div className="text-2xl">Admin Page</div>
					<div className="text-xl">Dashboard</div>
					<div className="text-xl">Create</div>
					<div className="text-xl">Update</div>
				</div>
				{/* Footer */}
				<div>
					<div className="text-xl hover:underline">Log Out</div>
				</div>
			</nav>
		</div>
	);
}
