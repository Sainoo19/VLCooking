import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ itemCount, onCartClick }) => {
  return (
    <div className="fixed bottom-64 right-16 mx-auto my-auto z-50">
      <div className="relative">
        <button
          onClick={onCartClick}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
        >
          <FaShoppingCart className="w-6 h-6 text-gray-700" />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default CartIcon;
