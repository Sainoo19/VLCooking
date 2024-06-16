import React from "react";
import { Link } from "react-router-dom";
import VideoEmbed from "../components/Video";

export default function Product_detail() {
  return (
    <div className="flex flex-col justify-around bg-gray-200 lg:font-medium">
      {/* Banner */}
      <img
        src="https://images.pexels.com/photos/11742808/pexels-photo-11742808.jpeg?cs=srgb&dl=pexels-lathinh-11742808.jpg&fm=jpg"
        className="w-full"
      />
      <div className="flex flex-col bg-white p-8 ">
        <h1 className=" text-8xl p-5 mb-10 ml-6 ">Cơm Tấm</h1>
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
        <div className="flex ml-6 items-center mb-5">
          <h2 className=" text-2xl font-bold mr-4">Ingredients:</h2>
          <a className="flex gap-3">
            <p className="text-2xl text-blue-500">Thịt bò, </p>
            <p className="text-2xl text-blue-500">cơm, </p>
            <p className="text-2xl text-blue-500">chả, </p>
            <p className="text-2xl text-blue-500">trứng, </p>
            <p className="text-2xl text-blue-500">nước mắm</p>
          </a>
        </div>
      </div>

      <br className="h-12" />

      {/* Description */}

      <br className="h-12" />
      <div className="flex flex-col bg-white">
        <div className="flex ml-6 mb-5 max-w-6xl p-8">
          <h2 className=" text-2xl font-bold mr-4">Description:</h2>
          <p className="text-2xl text-black-500">
            Cơm tấm is a beloved Vietnamese dish featuring broken rice,
            traditionally served with grilled pork chops, shredded pork skin,
            and a savory egg meatloaf (chả trứng). Often garnished with pickled
            vegetables, fresh herbs, and a tangy fish sauce, this rustic meal
            delivers a delightful balance of flavors and textures, capturing the
            essence of Vietnam’s street food culture.
          </p>
        </div>
      </div>
      <br className="h-12" />

      <br className="h-12" />
      {/* Video */}
      {/* Chưa cho ra giữa đc */}
      <div className=" bg-white p-5 mb-10">
        <VideoEmbed embedId="dQw4w9WgXcQ" />
      </div>
      <br className="h-12" />

      <div className="flex flex-col bg-white">
        {/* Instructions */}
        <div className="flex ml-6 mb-5 max-w-6xl p-8">
          <h2 className=" text-2xl font-bold mr-4">Instructions:</h2>
          <p className="text-2xl text-black-500">
            Cơm tấm is a beloved Vietnamese dish featuring broken rice,
            traditionally served with grilled pork chops, shredded pork skin,
            and a savory egg meatloaf (chả trứng). Often garnished with pickled
            vegetables, fresh herbs, and a tangy fish sauce, this rustic meal
            delivers a delightful balance of flavors and textures, capturing the
            essence of Vietnam’s street food culture.
          </p>
        </div>
      </div>
    </div>
  );
}
