import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartData from "../data/cartdata.json";

export default function CartModel() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartData = () => {
      try {
        const data = CartData;
        setCartItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartData();
  }, []);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="flex justify-center items-center my-10 p-4">
      <div
        className="w-5/6 max-w-3x lp-6 rounded-lg 
      "
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Giỏ hàng của bạn
        </h2>
        {cartItems.length > 0 ? (
          <>
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 text-left">Sản phẩm</th>
                  <th className="border-b py-2 text-left">Số lượng</th>
                  <th className="border-b py-2 text-right">Giá</th>
                  <th className="border-b py-2 text-right">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="py-2 text-left ">{item.title}</td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item._id, parseInt(e.target.value))
                      }
                      className="w-16 -mr-48 border p-1 text-center"
                      min="1"
                    />
                    <td className="py-2 text-right">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-2 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-6">
              <span className="font-bold text-lg">Tổng tiền:</span>
              <span className="text-lg">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="mt-6 flex justify-end">
              <Link
                to="/payment"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Thanh toán
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center">Giỏ hàng của bạn đang trống.</p>
        )}
      </div>
    </div>
  );
}
