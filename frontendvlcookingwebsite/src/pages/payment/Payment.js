import React from "react";
import { FaRegCreditCard } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function payment() {
	return (
		<div className="py-4">
			<div className="flex flex-col justify-center items-center my-auto">
				<FaRegCreditCard className="text-7xl" />
				<h1 className="text-3xl font-bold">Payment</h1>
				<p className="text-xl text-gray-400">Vui lòng nhập thông tin thanh toán</p>
			</div>
			<h1 className="text-2xl font-semibold px-4">Thông tin thanh toán</h1>
			<div className="w-full p-4">
				<p className="p-2">Tên khách hàng:</p>
				<input
					type="text"
					readOnly="true"
					placeholder="Tên"
					className="border p-3 rounded-lg w-1/2 h-12"
					maxLength="62"
					minLength="10"
				/>
			</div>
			<div className="w-full p-4">
				<p className="p-2">Số điện thoại:</p>
				<input type="tel" placeholder="Phone" className="border p-3 rounded-lg w-1/2" pattern="[0-9]{10}" />
			</div>
			<div className="w-full p-4">
				<p className="p-2">Địa chỉ:</p>
				<input
					type="text"
					readOnly="true"
					placeholder="Địa chỉ"
					className="border p-3 rounded-lg w-1/2 h-12"
					maxLength="62"
					minLength="10"
				/>
			</div>
			<div className="p-4">
				<p className="p-2">Hình thức thanh toán:</p>
				<div className="flex flex-col pl-1 ">
					<div className="flex flex-row items-center gap-3">
						<input type="radio" name="payment" value="Cod" className="border rounded-lg w-4 h-auto" required />
						{"Cod"}
					</div>
					<div className="flex flex-row items-center gap-3">
						<input type="radio" name="payment" value="Chuyển khoản" className="border rounded-lg w-4 h-auto" required />
						{"Chuyển khoản"}
					</div>
				</div>
			</div>
			<Link to="/payment/confirm">
				<button className="rounded bg-blue-400 py-3 px-2 font-bold m-4 text-white hover:bg-blue-500">Thanh toán</button>
			</Link>
		</div>
	);
}
