import React from "react";
import { FaRegCreditCard } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <FaRegCreditCard className="text-7xl text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Payment</h1>
        <p className="text-xl text-gray-500">
          Vui lòng nhập thông tin thanh toán
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg mt-6 p-6">
        <h2 className="text-2xl font-semibold mb-4">Thông tin thanh toán</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="customerName"
          >
            Tên khách hàng:
          </label>
          <input
            id="customerName"
            type="text"
            readOnly
            placeholder="Tên"
            className="border p-3 rounded-lg w-full h-12"
            maxLength="62"
            minLength="10"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Số điện thoại:
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Phone"
            className="border p-3 rounded-lg w-full h-12"
            pattern="[0-9]{10}"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Địa chỉ:
          </label>
          <input
            id="address"
            type="text"
            readOnly
            placeholder="Địa chỉ"
            className="border p-3 rounded-lg w-full h-12"
            maxLength="62"
            minLength="10"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Hình thức thanh toán:
          </label>
          <div className="flex flex-col gap-3 pl-1">
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="Cod"
                className="border rounded-lg w-4 h-4 mr-2"
                required
              />
              <span className="text-gray-700">Cod</span>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="Chuyển khoản"
                className="border rounded-lg w-4 h-4 mr-2"
                required
              />
              <span className="text-gray-700">Chuyển khoản</span>
            </div>
          </div>
        </div>
        <Link to="/payment/confirm">
          <button className="w-full rounded bg-blue-500 py-3 font-bold text-white hover:bg-blue-600">
            Thanh toán
          </button>
        </Link>
      </div>
    </div>
  );
}
