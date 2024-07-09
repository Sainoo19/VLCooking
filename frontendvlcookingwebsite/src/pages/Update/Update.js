import React from "react";
import { useLocation as UserLocation } from "react-router-dom";
import FormUpdate from "../../components/FormUpdate";

export default function Update() {
	const { state } = UserLocation(); // Sử dụng useLocation hook
	const data = state.keyword; // Truy cập prop 'data'
	return (
		<div>
			<FormUpdate keyword={data.keyword} />
		</div>
	);
}
