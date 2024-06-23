import React from "react";

export default function CreateRecipe() {
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
	);
}
