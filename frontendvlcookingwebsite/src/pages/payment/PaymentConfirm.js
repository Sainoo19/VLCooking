import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PaymentConfirm() {
	return (
		<div className="flex justify-center items-center py-4 px-4">
			<div className="flex flex-col items-center bg-white w-[450px] h-[450px] p-10 rounded-2xl">
				<FaCheckCircle className="text-8xl text-green-500 pt-1" />
				<h1 className="text-3xl font-bold mt-7">Thanh toán thành công</h1>
				<div className="flex gap-2">
					<p className="text-xl text-gray-400 mt-4">Mã đơn hàng của bạn là:</p>
					<p className="text-green-500 text-xl font-bold mt-4">Mã của bạn</p>
				</div>
				<p className="text-xl text-gray-400 mt-4">
					Cảm ơn bạn đã mua sản phẩm, sản phẩm sẽ được gửi tới trong 2-3 ngày
				</p>
				<Link to="/" className="mt-10">
					<button className="rounded bg-blue-400 py-3 px-4 font-bold m-4 text-white hover:bg-blue-500">
						Quay lại trang chủ
					</button>
				</Link>
			</div>
		</div>
	);
}
