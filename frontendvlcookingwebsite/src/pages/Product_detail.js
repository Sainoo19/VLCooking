import React from "react";
import { Link } from "react-router-dom";
import VideoEmbed from "../components/Video";

export default function Product_detail() {
	return (
		<div>
			{/* Banner */}
			<img
				src="https://images.pexels.com/photos/11742808/pexels-photo-11742808.jpeg?cs=srgb&dl=pexels-lathinh-11742808.jpg&fm=jpg"
				className="w-full"
			/>
			<h1 className="text-2xl font-bold p-5 mb-3 ml-6 sm:text-4xl">Cơm Tấm</h1>
			{/* Category */}
			<div className="flex ml-6 items-center mb-8">
				<h2 className=" text-2xl font-bold mr-4">Category:</h2>
				<Link to="/product">
					<button className="mr-3 text-xl rounded-lg bg-red-300 px-3 py-1 font-semibold hover:underline">
						Món chính
					</button>
				</Link>
				<Link to="/product">
					<button className="mr-3 text-xl rounded-lg bg-blue-300 px-3 py-1 font-semibold hover:underline">
						Món mặn
					</button>
				</Link>
			</div>
			{/* Ingredients */}
			<div className="flex ml-6 items-center mb-20">
				<h2 className=" text-2xl font-bold mr-4">Ingredients:</h2>
				<a className="flex gap-3">
					<p className="text-2xl text-blue-500">Thịt bò, </p>
					<p className="text-2xl text-blue-500">cơm, </p>
					<p className="text-2xl text-blue-500">chả, </p>
					<p className="text-2xl text-blue-500">trứng, </p>
					<p className="text-2xl text-blue-500">nước mắm</p>
				</a>
			</div>
			{/* Description */}
			<div className="flex ml-6 mb-5 max-w-6xl">
				<h2 className=" text-2xl font-bold mr-4">Description:</h2>
				<p className="text-2xl text-black-500">
					Cơm tấm is a beloved Vietnamese dish featuring broken rice, traditionally served with
					grilled pork chops, shredded pork skin, and a savory egg meatloaf (chả trứng). Often
					garnished with pickled vegetables, fresh herbs, and a tangy fish sauce, this rustic meal
					delivers a delightful balance of flavors and textures, capturing the essence of Vietnam’s
					street food culture.
				</p>
			</div>
			{/* Video */}
			{/* Chưa cho ra giữa đc */}
			<div className="bg-red-500 p-5 mb-10">
				<VideoEmbed embedId="dQw4w9WgXcQ" />
			</div>

			{/* Instructions */}
			<div className="flex ml-6 mb-5 max-w-6xl mb-10">
				<h2 className=" text-2xl font-bold mr-4">Instructions:</h2>
				<p className="text-2xl text-black-500">
					Cơm tấm is a beloved Vietnamese dish featuring broken rice, traditionally served with
					grilled pork chops, shredded pork skin, and a savory egg meatloaf (chả trứng). Often
					garnished with pickled vegetables, fresh herbs, and a tangy fish sauce, this rustic meal
					delivers a delightful balance of flavors and textures, capturing the essence of Vietnam’s
					street food culture.
				</p>
			</div>
		</div>
	);
}
