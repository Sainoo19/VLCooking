import React from "react";
import { Link } from "react-router-dom";

export default function Items({ listing }) {
	return (
		<div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
			<Link to={"/product/detail"}>
				<img
					src={
						listing.image ||
						"https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
					}
					alt="listing cover"
					className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
				/>
				<div className="p-3 flex flex-col gap-2 w-full">
					<p className="truncate text-lg font-semibold text-slate-700">{listing.title}</p>

					<p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>
				</div>
			</Link>
		</div>
	);
}
