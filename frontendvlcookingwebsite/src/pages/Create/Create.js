import React from "react";
import { useLocation as UserLocation } from "react-router-dom";
import CreateForm from "../../components/FormCreate";

const Create = () => {
	const { state } = UserLocation(); // Sử dụng useLocation hook
	const data = state.data; // Truy cập prop 'data'
	return (
		<div>
			<CreateForm keyword={data.keyword} />
		</div>
	);
};

export default Create;
