import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="flex">
			<div className="columns-3xs w-13 ">
				<div className="bg-slate-600 text-white h-full">
					<nav>
						{/* Content */}
						<div className=" gap-2  h-screen">
							<p className="text-center my-auto h-10 text-3xl p-3 my-3 mb-5">Admin Page</p>
							<Link to="/admin" className="">
								<p className=" pl-4 h-10 text-xl clickable hover:bg-slate-300">Recipe</p>
							</Link>
							<Link to="/admin/users" className="">
								<p className=" pl-4 h-10 text-xl hover:bg-slate-300">Users</p>
							</Link>

							<Link to="/admin/orders" className="">
								<p className=" pl-4 h-10 text-xl hover:bg-slate-300">Orders</p>
							</Link>

							<Link to="/admin/roles" className="">
								<p className=" pl-4 h-10 text-xl hover:bg-slate-300">Roles</p>
							</Link>

							<Link to="/admin/products" className="">
								<p className="mx-auto pl-4 h-10 text-xl hover:bg-slate-300">Products</p>
							</Link>
							<Link to="/admin/ingredient" className="">
								<p className="mx-auto pl-4 h-10 text-xl hover:bg-slate-300">Ingredient</p>
							</Link>
						</div>
						{/* Footer */}
						<div>
							<div className=" pl-4 mb-3 text-xl hover:underline">Log Out</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
}
