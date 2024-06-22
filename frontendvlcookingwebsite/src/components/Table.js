import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { GrView } from "react-icons/gr";

const Table = ({ Name }) => {
	const FakeData = [
		{ id: "1", recipe: "Cơm Tấm", author: "Nguyễn Phúc Trọng", category: "Món Mặn" },
		{ id: "2", recipe: "Cơm Rang", author: "Nguyễn Viết Trung", category: "Món Chính" },
		{ id: "3", recipe: "Flan", author: "Đồng Sĩ Phú", category: "Món Phụ" },
	];
	if (Name === "Recipe") {
		return (
			<div className="m-4">
				<table className="outline outline-1">
					<tr className="outline outline-1">
						<th className="">#</th>
						<th className="">Title</th>
						<th className="">Author</th>
						<th className="">Category</th>
						<th className="">Action</th>
					</tr>
					{FakeData.map((val, key) => {
						return (
							<tr className="items-center outline outline-1 outline-gray-300" key={key}>
								<td className="">{val.id}</td>
								<td className=" pr-3">{val.recipe}</td>
								<td className="pr-3">{val.author}</td>
								<td className="">{val.category}</td>
								<td className="flex text-center mt-1 gap-2">
									<GrView className="text-blue-400" />
									<GoPencil className="text-yellow-400" />
									<FaTrashAlt className="text-red-400" />
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	}
};

export default Table;
