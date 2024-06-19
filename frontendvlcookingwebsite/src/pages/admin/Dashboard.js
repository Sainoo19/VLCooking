import React from "react";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
	return (
		<div className="flex ">
			<div className="columns-3xs w-13">
				<Sidebar />
			</div>
			<div className="columns-2">
				<h1>Dashboard</h1>
			</div>
		</div>
	);
}
