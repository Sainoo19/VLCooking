import React from "react";

export default function CreateProduct() {
	return (
		<div className="max-w-6xl mx-auto p-3 sm:text-lg">
			<div className=" p-3 flex flex-col gap-8 my-10">
				<h1 className="font-bold text-3xl ">Create Product</h1>
				<p className="text-gray-500">breadcrumbs</p>
			</div>
			<form className="flex flex-col gap-4 min-w-2xl items-center">
				<div className="flex flex-col w-full">
					<div className="flex flex-row gap-4">
						<div className="w-full p-4">
							<p className="p-2">Name of product:</p>
							<input type="text" placeholder="Name of product" className="border p-3 rounded-lg w-full" />
						</div>
						<div className="w-full p-4">
							<p className="p-2">Price:</p>
							<input
								type="number"
								placeholder="Price"
								className="border p-3 rounded-lg w-30"
								maxLength="62"
								minLength="10"
							/>
						</div>
					</div>
					<div className="flex flex-row gap-4 ">
						<div className="w-full p-4">
							<p className="p-2">Category:</p>
							<select className="border rounded-lg h-10 pl-4 w-full">
								<option></option>
								<option>Món Mặn</option>
								<option>Món Chính</option>
							</select>
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
