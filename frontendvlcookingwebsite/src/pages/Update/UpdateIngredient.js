import React from "react";
import { Link } from "react-router-dom";

export default function UpdateIngredient() {
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
}
