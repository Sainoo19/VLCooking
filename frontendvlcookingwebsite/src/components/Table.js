import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
const Table = ({ Name }) => {
	const FakeData = [
		{
			id: "1",
			recipe: "Cơm Tấm",
			author: "Nguyễn Phúc Trọng",
			address: "Số 1 phố Tôn Thất Đàm, phường Điện Biên, quận Ba Đình, thành phố Hà Nội",

			category: "Món Mặn",
		},
		{
			id: "2",
			recipe: "Cơm Rang",
			author: "Nguyễn Viết Trung",
			address: "Số 1 phố Tôn Thất Đàm, phường Điện Biên, quận Ba Đình, thành phố Hà Nội",
			category: "Món Chính",
		},
		{
			id: "3",
			recipe: "Flan",
			author: "Đồng Sĩ Phú",
			address: "Số 1 phố Tôn Thất Đàm, phường Điện Biên, quận Ba Đình, thành phố Hà Nội",
			category: "Món Phụ",
		},
	];
	if (Name === "Recipe") {
		return (
			<div className="m-4 w-full">
				<table className="outline outline-1">
					<tr className="outline outline-1 w-full border-b">
						<th className=" py-3 border-r border-gray-400">#</th>
						<th className="py-3 border-r border-gray-400">Title</th>
						<th className="py-3 border-r border-gray-400">Author</th>
						<th className="py-3 border-r border-gray-400">Address</th>
						<th className="py-3 border-r border-gray-400">Category</th>
						<th className="py-3 border-r border-gray-400">Action</th>
					</tr>
					{FakeData.map((val, key) => {
						return (
							<tr className="items-center outline outline-1 outline-gray-300 w-full" key={key}>
								<td className=" border-r border-gray-400 w-8 py-3 pl-3 pr-3">{val.id}</td>
								<td className="border-r border-gray-400  py-3 w-40 pr-3 pl-4 ">{val.recipe}</td>
								<td className=" border-r border-gray-400 py-3 w-60 pr-3 pl-4 ">{val.author}</td>
								<td className=" border-r border-gray-400 py-3 w-96 pr-3 pl-4 ">{val.address}</td>
								<td className=" border-r border-gray-400 py-3 w-36 pl-4 ">{val.category}</td>
								<td className="border-r border-gray-400 flex justify-around py-3 w-32 mt-4 gap-1 h-full">
									<Link to="/">
										<GrView className="text-blue-400 hover:text-blue-200" size={25} />
									</Link>
									<Link to="/admin/update">
										<GoPencil className="text-yellow-400 hover:text-yellow-200" size={25} />
									</Link>

									<Link to="/admin/delete">
										<FaTrashAlt className="text-red-400 hover:text-red-200" size={25} />
									</Link>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	} else if (Name === "Product") {
		const FakeData = [
			{
				id: "1",
				name: "Cơm",
				price: "200.000",
				category: "Món mặn",
			},
			{
				id: "2",
				name: "Nước mắm",
				price: "2.000",
				category: "Món ăn kèm",
			},
		];
		return (
			<div className="m-4 w-full">
				<table className="outline outline-1">
					<tr className="outline outline-1 w-full border-b">
						<th className=" py-3 border-r border-gray-400">#</th>
						<th className="py-3 border-r border-gray-400">Name</th>
						<th className="py-3 border-r border-gray-400">Price</th>
						<th className="py-3 border-r border-gray-400">Category</th>
						<th className="py-3 border-r border-gray-400">Action</th>
					</tr>
					{FakeData.map((val, key) => {
						return (
							<tr className="items-center outline outline-1 outline-gray-300 w-full" key={key}>
								<td className=" border-r border-gray-400 w-8 py-3 pl-3 pr-3">{val.id}</td>
								<td className="border-r border-gray-400  py-3 w-40 pr-3 pl-4 ">{val.name}</td>
								<td className=" border-r border-gray-400 py-3 w-60 pr-3 pl-4 ">{val.price}</td>
								<td className=" border-r border-gray-400 py-3 w-96 pr-3 pl-4 ">{val.category}</td>
								<td className="border-r border-gray-400 flex justify-around py-3 w-32 mt-2 gap-1 h-full">
									<Link to="/">
										<GrView className="text-blue-400 hover:text-blue-200" size={25} />
									</Link>
									<Link to="/admin/update">
										<GoPencil className="text-yellow-400 hover:text-yellow-200" size={25} />
									</Link>

									<Link to="/admin/delete">
										<FaTrashAlt className="text-red-400 hover:text-red-200" size={25} />
									</Link>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	} else if (Name === "User") {
		const FakeData = [
			{
				id: "1",
				username: "Nguyễn Phúc Trọng",
				password: "1123213*****",
				email: "Trong@gmail.com",
				role: "admin",
			},
			{
				id: "2",
				username: "Nguyễn Văn A",
				password: "1123213*****",
				email: "A@gmail.com",
				role: "customer",
			},
		];
		return (
			<div className="m-4 w-full">
				<table className="outline outline-1">
					<tr className="outline outline-1 w-full border-b">
						<th className=" py-3 border-r border-gray-400">#</th>
						<th className="py-3 border-r border-gray-400">Username</th>
						<th className="py-3 border-r border-gray-400">Password</th>
						<th className="py-3 border-r border-gray-400">Email</th>
						<th className="py-3 border-r border-gray-400">Role</th>
						<th className="py-3 border-r border-gray-400">Action</th>
					</tr>
					{FakeData.map((val, key) => {
						return (
							<tr className="items-center outline outline-1 outline-gray-300 w-full" key={key}>
								<td className=" border-r border-gray-400 w-8 py-3 pl-3 pr-3">{val.id}</td>
								<td className="border-r border-gray-400  py-3 w-40 pr-3 pl-4 ">{val.username}</td>
								<td className=" border-r border-gray-400 py-3 w-60 pr-3 pl-4 ">{val.password}</td>
								<td className=" border-r border-gray-400 py-3 w-96 pr-3 pl-4 ">{val.email}</td>
								<td className=" border-r border-gray-400 py-3 w-36 pl-4 ">{val.role}</td>
								<td className="border-r border-gray-400 flex justify-around py-3 w-32 mt-4 gap-1 h-full">
									<Link to="/">
										<GrView className="text-blue-400 hover:text-blue-200" size={25} />
									</Link>
									<Link to="/admin/update">
										<GoPencil className="text-yellow-400 hover:text-yellow-200" size={25} />
									</Link>

									<Link to="/admin/delete">
										<FaTrashAlt className="text-red-400 hover:text-red-200" size={25} />
									</Link>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	} else if (Name === "Role") {
		const FakeData = [
			{
				id: "1",
				rolename: "admin",
			},
			{
				id: "2",
				rolename: "customer",
			},
			{
				id: "3",
				rolename: "staff",
			},
		];
		return (
			<div className="m-4 w-64">
				<table className="outline outline-1 w-full">
					<tr className="outline outline-1 w-full border-b">
						<th className=" py-3 border-r border-gray-400">#</th>
						<th className="py-3 border-r border-gray-400">Role</th>
						<th className="py-3 border-r border-gray-400">Action</th>
					</tr>
					{FakeData.map((val, key) => {
						return (
							<tr className="items-center outline outline-1 outline-gray-300 w-full" key={key}>
								<td className=" border-r border-gray-400 w-8 py-3 pl-3 pr-3">{val.id}</td>
								<td className=" border-r border-gray-400 py-3 w-24 pl-1 ">{val.rolename}</td>
								<td className="border-r flex justify-around py-3 w-36 mt-2 gap-1 h-full w-full ">
									<Link to="/">
										<GrView className="text-blue-400 hover:text-blue-200" size={25} />
									</Link>
									<Link to="/admin/update">
										<GoPencil className="text-yellow-400 hover:text-yellow-200" size={25} />
									</Link>

									<Link to="/admin/delete">
										<FaTrashAlt className="text-red-400 hover:text-red-200" size={25} />
									</Link>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	} else if (Name === "Order") {
		const FakeData = [
			{
				id: "1",
				userid: "1",
				username: "Trong Nguyễn",
				productid: "2",
				productname: "Cơm",
				status: "Đang giao",
				quantity: "1",
				totalprice: "100.000",
			},
			{
				id: "2",
				userid: "2",
				username: "Nguyễn Văn A",
				productid: "1",
				productname: "nước mắn",
				status: "Đang chuẩn bị",
				quantity: "1",
				totalprice: "50.000",
			},
		];
		return (
			<div className="m-4 w-full">
				<table className="outline outline-1">
					<tr className="outline outline-1 w-full border-b">
						<th className=" py-3 border-r border-gray-400">#</th>
						<th className="py-3 border-r border-gray-400">UserID</th>
						<th className="py-3 border-r border-gray-400">Username</th>
						<th className="py-3 border-r border-gray-400">ProductID</th>
						<th className="py-3 border-r border-gray-400">ProductName</th>
						<th className="py-3 border-r border-gray-400">Quantity</th>
						<th className="py-3 border-r border-gray-400">TotalPrice</th>
						<th className="py-3 border-r border-gray-400">Status</th>
						<th className="py-3 border-r border-gray-400">Action</th>
					</tr>
					{FakeData.map((val, key) => {
						return (
							<tr className="items-center outline outline-1 outline-gray-300 w-full" key={key}>
								<td className=" border-r border-gray-400 w-8 py-3 pl-3 pr-3">{val.id}</td>
								<td className="border-r border-gray-400  py-3 w-40 pr-3 pl-4 ">{val.userid}</td>
								<td className=" border-r border-gray-400 py-3 w-60 pr-3 pl-4 ">{val.username}</td>
								<td className=" border-r border-gray-400 py-3 w-30 pr-3 pl-4 ">{val.productid}</td>
								<td className=" border-r border-gray-400 py-3 w-96 pr-3 pl-4 ">{val.productname}</td>
								<td className=" border-r border-gray-400 py-3 w-30 pr-3 pl-4 ">{val.quantity}</td>
								<td className=" border-r border-gray-400 py-3 w-60 pr-3 pl-4 ">{val.totalprice}</td>
								<td className=" border-r border-gray-400 py-3 w-96 pr-3 pl-4 ">{val.status}</td>
								<td className="border-r border-gray-400 flex justify-around py-3 w-32 mt-4 gap-1 h-full">
									<Link to="/">
										<GrView className="text-blue-400 hover:text-blue-200" size={25} />
									</Link>
									<Link to="/admin/update">
										<GoPencil className="text-yellow-400 hover:text-yellow-200" size={25} />
									</Link>

									<Link to="/admin/delete">
										<FaTrashAlt className="text-red-400 hover:text-red-200" size={25} />
									</Link>
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
