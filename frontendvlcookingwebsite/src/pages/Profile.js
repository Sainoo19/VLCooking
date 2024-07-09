import React, { useState } from "react";
import { Link } from "react-router-dom";
import slide2 from "../assets/slide2.png";
import CartIcon from "../components/CartIcon";
import CartData from "../data/cartdata.json";

export default function Profile() {
  const [itemCount] = useState(CartData.length); // Thêm state cho itemCount

  const [updateData, setUpdateData] = useState({
    user: "",
    username: "",
    email: "",
    number: "",
    gender: "male",
    birthday: "",
  });

  const handChange = (e) => {
    if (
      e.target.id === "male" ||
      e.target.id === "female" ||
      e.target.id === "lgbt"
    ) {
      setUpdateData({ ...updateData, gender: e.target.id });
    }
    if (
      e.target.type === "email" ||
      e.target.type === "text" ||
      e.target.type === "number" ||
      e.target.type === "date"
    ) {
      setUpdateData({
        ...updateData,
        [e.target.id]: e.target.value,
      });
    }
    console.log(updateData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý lưu dữ liệu người dùng ở đây
    console.log(updateData);
  };

  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
      alert("Vui lòng nhập số.");
    }
  };

  return (
    <div className="flex flex-col mb-20 bg-gray-100 p-8 rounded-lg">
      <div>
        <h1 className="text-6xl mb-12 font-semibold text-center my-7">
          Profile
        </h1>
      </div>
      <div className="flex justify-around gap-2 ">
        <div className="flex flex-col gap-6 w-full max-w-lg ">
          <form onSubmit={handleSubmit} className="w-[600px] font-semibold">
            <div className="flex flex-col gap-3 my-7">
              <label htmlFor="user" className="mb-1">
                Tên đăng nhập:
              </label>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                id="user"
                className="border p-3 rounded-lg"
                value={updateData.user}
                onChange={handChange}
              />
            </div>
            <div className="flex flex-col gap-3 my-7">
              <label htmlFor="username" className="mb-1">
                Tên:
              </label>
              <input
                type="text"
                placeholder="Tên"
                id="username"
                className="border p-3 rounded-lg"
                value={updateData.username}
                onChange={handChange}
              />
            </div>
            <div className="flex flex-col gap-3 my-7">
              <label htmlFor="email" className="mb-1">
                Email:
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="border p-3 rounded-lg"
                value={updateData.email}
                onChange={handChange}
              />
            </div>
            <div className="flex flex-col gap-3 my-7">
              <label htmlFor="number" className="mb-1">
                Số điện thoại:
              </label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Số điện thoại"
                id="number"
                className="border p-3 rounded-lg"
                value={updateData.number}
                onChange={handChange}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="flex flex-col gap-3 my-7">
              <label className="mb-1">Giới tính:</label>
              <div className="flex gap-4">
                <div>
                  <input
                    type="checkbox"
                    id="male"
                    className="rounded-sm"
                    checked={updateData.gender === "male"}
                    onChange={handChange}
                  />
                  <label htmlFor="male" className="ml-2">
                    Nam
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="female"
                    checked={updateData.gender === "female"}
                    onChange={handChange}
                  />
                  <label htmlFor="female" className="ml-2">
                    Nữ
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="lgbt"
                    checked={updateData.gender === "lgbt"}
                    onChange={handChange}
                  />
                  <label htmlFor="lgbt" className="ml-2">
                    Khác
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 my-7">
              <label htmlFor="birthday" className="mb-1">
                Ngày sinh:
              </label>
              <input
                type="date"
                id="birthday"
                className="border p-3"
                value={updateData.birthday}
                onChange={handChange}
              />
            </div>
            <button className="bg-slate-700 items-center w-28 ml-56 text-white rounded-lg p-3 uppercase hover:opacity-65 disabled:opacity-80 mt-4">
              Lưu
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center mt-24 gap-4 w-[500px] -ml-80 h-[500px] border-l p-20 border-gray-300  max-w-3xl">
          <img
            src={slide2}
            alt="Cooking Logo"
            className="rounded-full h-32 w-32 object-cover cursor-pointer"
          />
          <button className="bg-blue-700 text-white rounded-lg p-3 uppercase hover:opacity-85 disabled:opacity-80">
            Chọn ảnh
          </button>
          <p className="text-sm text-gray-600">
            Dung lượng tối đa 1 MB.
            <br />
            Định dạng: JPEG, PNG
          </p>
        </div>
      </div>
      <Link to="/cart">
        <CartIcon itemCount={itemCount} />
      </Link>
    </div>
  );
}
