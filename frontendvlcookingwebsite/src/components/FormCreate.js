import axios from "axios";
import React, { useEffect, useState } from "react";

const FormCreate = ({ keyword }) => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		email: "",
		role: "", // Sẽ chứa roleId
	});

	const [roles, setRoles] = useState([]);

	useEffect(() => {
		// Lấy danh sách các roles từ API
		axios
			.get("http://localhost:8080/api/roles")
			.then((response) => setRoles(response.data))
			.catch((error) => console.error("Error fetching roles:", error));
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Ensure all fields are filled
		if (!formData.username || !formData.password || !formData.email || !formData.role) {
			alert("Please fill all fields.");
			return;
		}

		const payload = {
			...formData,
			role: {
				roleId: formData.role, // Send role as an object with roleId
			},
		};

		try {
			const response = await axios.post("http://localhost:8080/api/users", payload, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log("User created successfully:", response.data);
		} catch (error) {
			console.error("Error creating user:", error.response ? error.response.data : error.message);
		}
	};
	if (keyword === "recipes") {
		return (
			<div>
				<div className="max-w-6xl mx-auto p-3 sm:text-lg">
					<div className=" p-3 flex flex-col gap-8 my-10">
						<h1 className="font-bold text-3xl ">Create User</h1>
						<p className="text-gray-500">breadcrumbs</p>
					</div>
					<form className="flex flex-col gap-4 min-w-2xl items-center">
						<div className="flex flex-col w-full">
							<div className="flex flex-row gap-4">
								<div className="w-full p-4">
									<p className="p-2">Title:</p>
									<input type="text" placeholder="Name of recipe" className="border p-3 rounded-lg w-full" />
								</div>
								<div className="w-full p-4">
									<p className="p-2">Description:</p>
									<input type="text" placeholder="Describe the recipe" className="border p-3 rounded-lg w-full" />
								</div>
							</div>
							<div className="flex flex-row gap-4 ">
								<div className="w-full p-4">
									<p className="p-2">Ingredient:</p>
									<select className="border rounded-lg pl-4 w-full h-12">
										<option></option>
										<option>Cơm</option>
										<option>Cháo</option>
									</select>
								</div>
								<div className="w-full p-4">
									<p className="p-2">Cook time:</p>
									<input type="time" placeholder="Time" className="border p-3 rounded-lg w-full h-12" />
								</div>
							</div>
							<div className="flex flex-row gap-4 ">
								<div className="w-full p-4">
									<p className="p-2">Video ID:</p>
									<input type="text" placeholder="ID of the video" className="border p-3 rounded-lg w-full" />
								</div>
								<div className="w-full p-4">
									<p className="p-2">Image:</p>
									<input
										className="p-3 border border-gray-300 rounded w-full"
										type="file"
										id="images"
										accept="image/*"
										multiple
									/>
								</div>
							</div>
							<div className="flex flex-row gap-4">
								<div className="w-full p-4">
									<p className="p-2">ID of customer:</p>
									<select className="border rounded-lg h-12 pl-4 w-full">
										<option></option>
										<option>1</option>
										<option>2</option>
									</select>
								</div>
								<div className="w-full p-4">
									<p className="p-2">Name of customer:</p>
									<input
										type="text"
										readOnly="true"
										placeholder="Name of customer"
										className="border p-3 rounded-lg w-full h-12"
									/>
								</div>
							</div>
							<div className="flex flex-row gap-4 ">
								<div className="w-full p-4">
									<p className="p-2">Instruction:</p>
									<input
										type="text"
										placeholder=""
										className="border p-3 rounded-lg w-full h-60"
										maxLength="62"
										minLength="10"
									/>
								</div>
							</div>

							<div className="flex flex-row gap-4 p-4">
								<button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
									Create
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	} else if (keyword === "users") {
		return (
			<div className="max-w-6xl mx-auto p-3 sm:text-lg">
				<div className="p-3 flex flex-col gap-8 my-10">
					<h1 className="font-bold text-3xl">Create User</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-4 min-w-2xl items-center">
					<div className="flex flex-col w-full">
						<div className="flex flex-row gap-4">
							<div className="w-full p-4">
								<p className="p-2">Email:</p>
								<input
									type="email"
									name="email"
									placeholder="Email"
									className="border p-3 rounded-lg w-full"
									onChange={handleChange}
									value={formData.email}
								/>
							</div>
							<div className="w-full p-4">
								<p className="p-2">Username:</p>
								<input
									type="text"
									name="username"
									placeholder="Username"
									className="border p-3 rounded-lg w-full"
									maxLength="62"
									onChange={handleChange}
									value={formData.username}
								/>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="w-full p-4">
								<p className="p-2">Password:</p>
								<input
									type="password"
									name="password"
									placeholder="Password"
									className="border p-3 rounded-lg w-full"
									maxLength="62"
									minLength="10"
									onChange={handleChange}
									value={formData.password}
								/>
							</div>
							<div className="w-full p-4">
								<p className="p-2">Role:</p>
								<select
									name="role"
									className="border rounded-lg h-12 pl-4 w-full"
									onChange={handleChange}
									value={formData.role}
								>
									<option value="">Select a role</option>
									{roles.map((role) => (
										<option key={role.roleId} value={role.roleId}>
											{role.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="flex flex-row gap-4 p-4">
							<button
								type="submit"
								className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
							>
								Create
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	} else if (keyword === "roles") {
		return (
			<div className="max-w-6xl mx-auto p-3 sm:text-lg mb-[185px]">
				<div className=" p-3 flex flex-col gap-8 my-10">
					<h1 className="font-bold text-3xl ">Create Role</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center">
					<div className="flex flex-col w-full">
						<div className="flex flex-row gap-4">
							<div className="w-full p-4">
								<p className="p-2">Role:</p>
								<input type="text" placeholder="Role" className="border p-3 rounded-lg w-full" />
							</div>
						</div>
						<div className="gap-4 p-4">
							<button className="bg-blue-600 w-26 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
								Create
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	} else if (keyword === "ingredients") {
		<div className="max-w-6xl mx-auto p-3 sm:text-lgmb-[185px]">
			<div className=" p-3 flex flex-col gap-8 my-10">
				<h1 className="font-bold text-3xl ">Create Ingredient</h1>
				<p className="text-gray-500">breadcrumbs</p>
			</div>
			<form className="flex flex-col gap-4 min-w-2xl items-center">
				<div className="flex flex-col w-full">
					<div className="flex flex-row gap-4">
						<div className="w-full p-4">
							<p className="p-2">Ingredient:</p>
							<input type="text" placeholder="Ingredient" className="border p-3 rounded-lg w-full" />
						</div>
					</div>
					<div className="gap-4 p-4">
						<button className="bg-blue-600 w-26 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
							Create
						</button>
					</div>
				</div>
			</form>
		</div>;
	} else if (keyword === "orders") {
		return (
			<div className="max-w-6xl mx-auto p-3 sm:text-lg">
				<div className=" p-3 flex flex-col gap-8 my-10">
					<h1 className="font-bold text-3xl ">Create Order</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center">
					<div className="flex flex-col w-full">
						<div className="flex flex-row gap-4">
							<div className="w-full p-4">
								<p className="p-2">ID of customer:</p>
								<select className="border rounded-lg h-12 pl-4 w-full">
									<option></option>
									<option>1</option>
									<option>2</option>
								</select>
							</div>
							<div className="w-full p-4">
								<p className="p-2">Name of customer:</p>
								<input
									type="text"
									readOnly="true"
									placeholder="Name of customer"
									className="border p-3 rounded-lg w-full h-12"
									maxLength="62"
									minLength="10"
								/>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="w-full p-4">
								<p className="p-2">ID of product:</p>
								<select className="border rounded-lg h-12 pl-4 w-full">
									<option></option>
									<option>1</option>
									<option>2</option>
								</select>
							</div>
							<div className="w-full p-4">
								<p className="p-2">Name of product:</p>
								<input
									type="text"
									readOnly="true"
									placeholder="Name of Product"
									className="border p-3 rounded-lg w-full h-12"
									maxLength="62"
									minLength="10"
								/>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="w-full p-4">
								<p className="p-2">price:</p>
								<input
									type="text"
									readOnly="true"
									placeholder="Price"
									className="border p-3 rounded-lg w-30 h-12"
									maxLength="62"
									minLength="10"
								/>
							</div>
						</div>
						<div className="flex flex-row gap-4 ">
							<div className="w-full p-4">
								<p className="p-2">Quantity:</p>
								<input
									type="number"
									defaultValue={0}
									className="border p-3 rounded-lg w-full h-12"
									maxLength="62"
									minLength="10"
								/>
							</div>
							<div className="w-full p-4">
								<p className="p-2">Status:</p>
								<select className="border rounded-lg h-12 pl-4 w-full">
									<option></option>
									<option>Đang chuẩn bị</option>
									<option>Đang giao</option>
									<option>Đã hoàn thành</option>
								</select>
							</div>
						</div>
						<div className="flex flex-row gap-4 p-4">
							<button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
								Create
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	} else if (keyword === "categories") {
		return (
			<div className="max-w-6xl mx-auto p-3 sm:text-lg">
				<div className=" p-3 flex flex-col gap-8 my-10">
					<h1 className="font-bold text-3xl ">Create Category</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center">
					<div className="flex flex-col w-full">
						<div className="flex flex-row gap-4 ">
							<div className="w-full p-4">
								<p className="p-2">Category:</p>

								<input className="border rounded-lg h-10 pl-4 w-full" type="text" placeholder="Category" />
							</div>
						</div>
						<div className="flex flex-row gap-4 p-4">
							<button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
								Create
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
};
export default FormCreate;
