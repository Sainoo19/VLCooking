import React from "react";

export default function CreateOrder() {
  return (
    <div className="max-w-6xl mx-auto p-3 sm:text-lg">
      <div className=" p-3 flex flex-col gap-8 my-10">
        <h1 className="font-bold text-3xl ">Create Order</h1>
        <p className="text-gray-500">breadcrumbs</p>
      </div>
      <form className="flex flex-col gap-4 min-w-2xl items-center">
        <div className="flex flex-col w-full">
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
                maxLength="62"
                minLength="10"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-full p-4">
              <p className="p-2">ID of product:</p>
              <select className="border rounded-lg h-12 pl-4 w-full">
                <option></option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="w-full p-4">
              <p className="p-2">Name of product:</p>
              <input
                type="text"
                readOnly="true"
                placeholder="Name of Product"
                className="border p-3 rounded-lg w-full h-12"
                maxLength="62"
                minLength="10"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-full p-4">
              <p className="p-2">price:</p>
              <input
                type="text"
                readOnly="true"
                placeholder="Price"
                className="border p-3 rounded-lg w-30 h-12"
                maxLength="62"
                minLength="10"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 ">
            <div className="w-full p-4">
              <p className="p-2">Quantity:</p>
              <input
                type="number"
                defaultValue={0}
                className="border p-3 rounded-lg w-full h-12"
                maxLength="62"
                minLength="10"
              />
            </div>
            <div className="w-full p-4">
              <p className="p-2">Status:</p>
              <select className="border rounded-lg h-12 pl-4 w-full">
                <option></option>
                <option>Đang chuẩn bị</option>
                <option>Đang giao</option>
                <option>Đã hoàn thành</option>
              </select>
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
