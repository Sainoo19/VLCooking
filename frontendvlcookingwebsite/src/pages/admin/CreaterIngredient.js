import React from "react";

export default function CreaterIngredient() {
  return (
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
              <input
                type="text"
                placeholder="Ingredient"
                className="border p-3 rounded-lg w-full"
              />
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
}
