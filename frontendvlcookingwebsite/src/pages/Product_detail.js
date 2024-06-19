import React from "react";
import { Link } from "react-router-dom";
import Category_Items from "../components/Category_Items";
import VideoEmbed from "../components/Video";

export default function Product_detail() {
	return (
		<div className="flex flex-col justify-around sm:bg-gray-200 bg-white">
			{/* Banner */}
			<img
				src="https://images.pexels.com/photos/11742808/pexels-photo-11742808.jpeg?cs=srgb&dl=pexels-lathinh-11742808.jpg&fm=jpg"
				className="w-full"
			/>

			<div className="flex flex-col sm:bg-white p-8">
				{/* Food name */}
				<h1 className=" sm:text-7xl p-5 sm:mb-10 sm:ml-6 text-4xl font-semibold">Cơm Tấm</h1>

				{/* Category */}
				<div className="flex ml-6 items-center mb-8">
					<h2 className=" sm:text-2xl text-md font-bold mr-4">Category:</h2>
					<Link to="/product">
						<Category_Items embedName="Món chính" color="bg-red-500" />
					</Link>
					<Link to="/product">
						<Category_Items embedName="Món mặn" color="bg-blue-500" />
					</Link>
				</div>

				{/* Ingredients */}
				<div className="inline ml-6 items-center mb-0 sm:flex">
					<h2 className="sm:text-2xl text-md font-bold mr-4">Ingredients:</h2>
					<a className="inline-flex gap-2 w-full sm:w-full sm:gap-4">
						<p className="sm:text-2xl text-blue-500">Thịt bò, </p>
						<p className="sm:text-2xl text-blue-500">cơm, </p>
						<p className="sm:text-2xl text-blue-500">chả, </p>
						<p className="sm:text-2xl text-blue-500">trứng, </p>
						<p className="sm:text-2xl text-blue-500">nước mắm, </p>
						<p className="sm:text-2xl text-blue-500">cá</p>
					</a>
				</div>
			</div>
			<br className="h-12" />

			{/* Description */}
			<br className="h-12" />
			<div className="flex flex-col sm:bg-white">
				<div className="flex ml-6 sm:mb-5 max-w-6xl sm:p-8 pr-8 pl-8">
					<h2 className="sm:text-2xl text-md font-bold mr-4">Description:</h2>
					<p className="sm:text-2xl text-md text-black-500">
						Cơm tấm is a beloved Vietnamese dish featuring broken rice, traditionally served with
						grilled pork chops, shredded pork skin, and a savory egg meatloaf (chả trứng). Often
						garnished with pickled vegetables, fresh herbs, and a tangy fish sauce, this rustic meal
						delivers a delightful balance of flavors and textures, capturing the essence of
						Vietnam’s street food culture.
					</p>
				</div>
			</div>
			<br className="h-12" />

			<br className="h-12" />
			{/* Video */}
			{/* Chưa cho ra giữa đc */}
			<div className=" sm:bg-white p-5 mb-10">
				<VideoEmbed embedId="dQw4w9WgXcQ" />
			</div>
			<br className="h-12" />

			<div className="flex flex-col sm:bg-white">
				{/* Instructions */}
				<div className="flex ml-6 mb-5 max-w-6xl sm:p-8 pr-8 pl-8">
					<h2 className="sm:text-2xl text-md  font-bold mr-4">Instructions:</h2>
					<p className="sm:text-2xl text-md  text-black-500">
						Cơm tấm is a beloved Vietnamese dish featuring broken rice, traditionally served with
						grilled pork chops, shredded pork skin, and a savory egg meatloaf (chả trứng). Often
						garnished with pickled vegetables, fresh herbs, and a tangy fish sauce, this rustic meal
						delivers a delightful balance of flavors and textures, capturing the essence of
						Vietnam’s street food culture.
					</p>
				</div>
			</div>
		</div>
	);
}
