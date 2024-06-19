import PropTypes from "prop-types";
import React from "react";

// missing if else code for color
// const color = "text-slate-700";

// if (Category_Items === "Món chính") {
// 	color = "bg-red-500";
// } else if (Category_Items === "Món mặn") {
// 	color = "bg-blue-500";
// }

const Category_Items = ({ embedName, color }) => (
	<div className="">
		<button
			className={`mr-3 sm:text-xl text-md ${color} rounded-lg px-3 py-1 font-semibold hover:underline`}
		>
			{embedName}
		</button>
	</div>
);

Category_Items.propTypes = {
	embedName: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default Category_Items;
