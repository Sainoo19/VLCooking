import React from "react";

export default function Create() {
	return (
		<div className="max-w-6xl mx-auto p-3 sm:text-lg">
			<div className=" p-3 flex flex-col gap-8 my-10">
				<h1 className="font-bold text-3xl ">Create User</h1>
				<p className="text-gray-500">breadcrumbs</p>
			</div>
			<form className="flex flex-col gap-4 min-w-2xl items-center">
				<div className="flex flex-col w-full">
					<div className="flex flex-row gap-4">
						<div className="w-full p-4">
							<p className="p-2">Email:</p>
							<input type="email" placeholder="Email" className="border p-3 rounded-lg w-full" />
						</div>
						<div className="w-full p-4">
							<p className="p-2">Password:</p>
							<input
								type="password"
								placeholder="Password"
								className="border p-3 rounded-lg w-full"
								maxLength="62"
								minLength="10"
							/>
						</div>
					</div>
					<div className="flex flex-row gap-4 ">
						<div className="w-full p-4">
							<p className="p-2">Phone Number:</p>
							<input type="tel" placeholder="Phone" className="border p-3 rounded-lg w-full" pattern="[0-9]{10}" />
						</div>
						<div className="w-full p-4">
							<p className="p-2">Full Name:</p>
							<input type="text" placeholder="Full Name" className="border p-3 rounded-lg w-full" />
						</div>
					</div>
					<div className="flex flex-row gap-4 ">
						<div className="w-full p-4">
							<p className="p-2">Address:</p>
							<input
								type="text"
								placeholder="Address"
								className="border p-3 rounded-lg w-full"
								maxLength="62"
								minLength="10"
							/>
						</div>
					</div>
					<div className="flex flex-row gap-4 ">
						<div className="w-full p-4">
							<p className="p-2">Role:</p>
							<select className="border rounded-lg h-12 pl-4 w-full">
								<option></option>
								<option>Admin</option>
								<option>Staff</option>
							</select>
						</div>
						<div className="w-full p-4">
							<p className="p-2">Avatar:</p>
							<input
								className="p-3 border border-gray-300 rounded w-full"
								type="file"
								id="images"
								accept="image/*"
								multiple
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
	);
}
