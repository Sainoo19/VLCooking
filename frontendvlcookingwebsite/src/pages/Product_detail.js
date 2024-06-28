import React from "react";
import { Link } from "react-router-dom";
import Category_Items from "../components/Category_Items";
import RatingAndCommentSection from "../components/RatingAndCommentSection";
import VideoEmbed from "../components/Video";

export default function Product_detail() {
  return (
    <div className="flex flex-col justify-around">
      {/* Banner */}
      <img
        src="https://images.pexels.com/photos/11742808/pexels-photo-11742808.jpeg?cs=srgb&dl=pexels-lathinh-11742808.jpg&fm=jpg"
        className="w-full"
        alt=""
      />

      <div className="flex flex-col p-8">
        {/* Food name */}
        <h1 className="sm:text-7xl p-5 sm:mb-10 sm:ml-6 text-4xl font-semibold">
          Cơm Tấm
        </h1>

        {/* Category and Ingredients Wrapper */}
        <div className="flex justify-between items-center mb-8 ml-6">
          <div>
            {/* Category */}
            <div className="flex items-center mb-4">
              <h2 className="sm:text-2xl text-md font-bold mr-4">Category:</h2>
              <Link to="/product">
                <Category_Items embedName="Món chính" color="bg-red-500" />
              </Link>
              <Link to="/product">
                <Category_Items embedName="Món mặn" color="bg-blue-500" />
              </Link>
            </div>

            {/* Ingredients */}
            <div className="flex items-center pt-4">
              <h2 className="sm:text-2xl text-md font-bold mr-4">
                Ingredients:
              </h2>
              <div className="inline-flex gap-2 w-full sm:w-full sm:gap-4">
                <p className="sm:text-2xl text-blue-500">Thịt bò, </p>
                <p className="sm:text-2xl text-blue-500">cơm, </p>
                <p className="sm:text-2xl text-blue-500">chả, </p>
                <p className="sm:text-2xl text-blue-500">trứng, </p>
                <p className="sm:text-2xl text-blue-500">nước mắm, </p>
                <p className="sm:text-2xl text-blue-500">cá</p>
              </div>
            </div>
          </div>

          {/* Buy Button */}
          <Link
            to="/payment"
            className="bg-green-500 text-white px-10 py-5 text-xl rounded-lg hover:bg-white hover:text-green-500 transition-colors duration-300 mr-80"
          >
            Mua Hàng
          </Link>
        </div>
      </div>

      <hr className="h-12 sm:bg-gray-200 border-0" />

      {/* Description */}
      <br className="h-12" />
      <div className="flex flex-col">
        <div className="flex ml-6 sm:mb-5 max-w-6xl sm:p-8 pr-8 pl-8">
          <h2 className="sm:text-2xl text-md font-bold mr-4">Description:</h2>
          <p className="sm:text-2xl text-md text-black-500">
            Cơm tấm is a beloved Vietnamese dish featuring broken rice,
            traditionally served with grilled pork chops, shredded pork skin,
            and a savory egg meatloaf (chả trứng). Often garnished with pickled
            vegetables, fresh herbs, and a tangy fish sauce, this rustic meal
            delivers a delightful balance of flavors and textures, capturing the
            essence of Vietnam’s street food culture.
          </p>
        </div>
      </div>
      <hr className="h-12 sm:bg-gray-200 border-0" />

      <hr className="h-12 sm:bg-gray-200 border-0" />

      {/* Video */}
      {/* Chưa cho ra giữa đc */}
      <div className=" p-5 mb-10">
        <VideoEmbed embedId="dQw4w9WgXcQ" />
      </div>
      <hr className="h-12 sm:bg-gray-200 border-0" />

      <div className="flex flex-col">
        {/* Instructions */}
        <div className="flex ml-6 mb-5 max-w-6xl sm:p-8 pr-8 pl-8">
          <h2 className="sm:text-2xl text-md  font-bold mr-4">Instructions:</h2>
          <p className="sm:text-2xl text-md  text-black-500">
            Cơm tấm is a beloved Vietnamese dish featuring broken rice,
            traditionally served with grilled pork chops, shredded pork skin,
            and a savory egg meatloaf (chả trứng). Often garnished with pickled
            vegetables, fresh herbs, and a tangy fish sauce, this rustic meal
            delivers a delightful balance of flavors and textures, capturing the
            essence of Vietnam’s street food culture.
          </p>
        </div>
      </div>
      <hr className="h-12 sm:bg-gray-200 border-0" />

      <div className="max-w-6xl  flex flex-col">
        <RatingAndCommentSection />
      </div>
    </div>
  );
}
