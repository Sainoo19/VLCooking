import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const FormUpdate = ({ keyword }) => {
	const { userId } = useParams();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
				const user = response.data;
				setEmail(user.email);
				setUsername(user.username);
				setLoading(false);
			} catch (error) {
				console.error("There was an error fetching the user data!", error);
				setError("Error fetching user data.");
				setLoading(false);
			}
		};

		fetchUser();
	}, [userId]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.put(`http://localhost:8080/api/users/${userId}`, {
				email,
				username,
			});
			console.log("User updated:", response.data);
			navigate("/admin/Users"); // Điều hướng về trang /admin/Users sau khi cập nhật thành công
		} catch (error) {
			console.error("There was an error updating the user!", error);
			setError("Error updating user data.");
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;
	console.log("hi", keyword);
	if (keyword === "recipes") {
		return (
			<div className="max-w-6xl mx-auto p-2 sm:text-lg">
				<div className=" p-3 flex flex-col gap-3 my-10">
					<h1 className="font-bold text-3xl ">Update Recipe</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center">
					<div className="flex flex-col w-full">
						<div className="w-full p-4">
							<p className="p-2">Title:</p>
							<input type="text" placeholder="Title" className="border p-3 rounded-lg w-full" />
						</div>

						<div className="w-full p-4">
							<p className="p-2">Author:</p>
							<input type="text" placeholder="Author" className="border p-3 rounded-lg w-full" />
						</div>

						<div className="w-full p-4">
							<p className="p-2">Address:</p>
							<input type="text" placeholder="Address" className="border p-3 rounded-lg w-full" />
						</div>

						<div className="w-full p-4">
							<p className="p-2">Category:</p>
							<input type="text" placeholder="Category" className="border p-3 rounded-lg w-full" />
						</div>
						<div className="flex flex-row ml-5 gap-4 ">
							<button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
								Update
							</button>
							<Link
								to="/admin"
								className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
							>
								Back
							</Link>
						</div>
					</div>
				</form>
			</div>
		);
	} else if (keyword === "categories") {
		return (
			<div className="max-w-6xl mx-auto p-2 sm:text-lg">
				<div className=" p-3 flex flex-col gap-3 my-10">
					<h1 className="font-bold text-3xl ">Update Category</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center">
					<div className="flex flex-col w-full">
						<div className="w-full p-4">
							<p className="p-2">Category:</p>
							<input type="text" placeholder="Category" className="border p-3 rounded-lg w-full" />
						</div>
						<div className="flex flex-row ml-5 gap-4 ">
							<button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
								Update
							</button>
							<Link
								to="/admin"
								className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
							>
								Back
							</Link>
						</div>
					</div>
				</form>
			</div>
		);
	} else if (keyword === "roles") {
		return (
			<div className="max-w-6xl mx-auto p-2 sm:text-lg">
				<div className=" p-3 flex flex-col gap-3 my-10">
					<h1 className="font-bold text-3xl ">Update Role</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center mb-64">
					<div className="flex flex-col w-full">
						<div className="w-full p-4">
							<p className="p-2">Role:</p>
							<input type="tel" placeholder="Role" className="border p-3 rounded-lg w-full" pattern="[0-9]{10}" />
						</div>

						<div className="flex flex-row ml-5 gap-4 ">
							<button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
								Update
							</button>
							<Link
								to="/admin/roles"
								className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
							>
								Back
							</Link>
						</div>
					</div>
				</form>
			</div>
		);
	} else if (keyword === "ingredients") {
		return (
			<div className="max-w-6xl mx-auto p-2 sm:text-lg">
				<div className=" p-3 flex flex-col gap-3 my-10">
					<h1 className="font-bold text-3xl ">Update Ingredient</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center mb-64">
					<div className="flex flex-col w-full">
						<div className="w-full p-4">
							<p className="p-2">Ingredientname:</p>
							<input
								type="tel"
								placeholder="Ingredientname"
								className="border p-3 rounded-lg w-full"
								pattern="[0-9]{10}"
							/>
						</div>

						<div className="flex flex-row ml-5 gap-4 ">
							<button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
								Update
							</button>
							<Link
								to="/admin/ingredient"
								className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
							>
								Back
							</Link>
						</div>
					</div>
				</form>
			</div>
		);
	} else if (keyword === "users") {
		return (
			<div className="max-w-6xl mx-auto p-2 sm:text-lg">
				<div className="p-3 flex flex-col gap-3 my-10">
					<h1 className="font-bold text-3xl">Update User</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center" onSubmit={handleSubmit}>
					<div className="flex flex-col w-full">
						<div className="w-full p-4">
							<p className="p-2">Email:</p>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								className="border p-3 rounded-lg w-full"
							/>
						</div>
						<div className="w-full p-4">
							<p className="p-2">Username:</p>
							<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Username"
								className="border p-3 rounded-lg w-full"
							/>
						</div>
						<div className="flex flex-row ml-5 gap-4">
							<button
								type="submit"
								className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
							>
								Update
							</button>
							<Link
								to="/admin/Users"
								className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
							>
								Back
							</Link>
						</div>
					</div>
				</form>
			</div>
		);
	} else if (keyword === "orders") {
		return (
			<div className="max-w-6xl mx-auto p-2 sm:text-lg">
				<div className=" p-3 flex flex-col gap-3 my-10">
					<h1 className="font-bold text-3xl ">Update Order</h1>
					<p className="text-gray-500">breadcrumbs</p>
				</div>
				<form className="flex flex-col gap-4 min-w-2xl items-center">
					<div className="flex flex-col w-full">
						<div className="w-full p-4">
							<p className="p-2">Username:</p>
							<input type="text" placeholder="Username" className="border p-3 rounded-lg w-full" />
						</div>
						<div className="w-full p-4">
							<p className="p-2">ProductName:</p>
							<input type="text" placeholder="Username" className="border p-3 rounded-lg w-full" />
						</div>

						<div className="w-full p-4">
							<p className="p-2">Quantity:</p>
							<input type="tel" placeholder="Quantity" className="border p-3 rounded-lg w-full" />
						</div>
						<div className="w-full p-4">
							<p className="p-2">TotalPrice:</p>
							<input type="tel" placeholder="TotalPrice" className="border p-3 rounded-lg w-full" />
						</div>

						<div className="w-full p-4">
							<p className="p-2">Status:</p>
							<input type="text" placeholder="Status" className="border p-3 rounded-lg w-full" />
						</div>
						<div className="flex flex-row ml-5 gap-4 ">
							<button className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
								Update
							</button>
							<Link
								to="/admin/orders"
								className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
							>
								Back
							</Link>
						</div>
					</div>
				</form>
			</div>
		);
	}
};
export default FormUpdate;
