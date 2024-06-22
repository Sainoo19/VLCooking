import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

const Table = ({ Name }) => {
  const FakeData = [
    {
      id: "1",
      recipe: "Cơm Tấm",
      author: "Nguyễn Phúc Trọng",
      address:
        "Số 1 phố Tôn Thất Đàm, phường Điện Biên, quận Ba Đình, thành phố Hà Nội",

      category: "Món Mặn",
    },
    {
      id: "2",
      recipe: "Cơm Rang",
      author: "Nguyễn Viết Trung",
      address:
        "Số 1 phố Tôn Thất Đàm, phường Điện Biên, quận Ba Đình, thành phố Hà Nội",
      category: "Món Chính",
    },
    {
      id: "3",
      recipe: "Flan",
      author: "Đồng Sĩ Phú",
      address:
        "Số 1 phố Tôn Thất Đàm, phường Điện Biên, quận Ba Đình, thành phố Hà Nội",
      category: "Món Phụ",
    },
  ];
  if (Name === "Recipe") {
    return (
      <div className="m-4 w-full">
        <table className="outline outline-1">
          <tr className="outline outline-1 w-full border-b">
            <th className=" py-3 border-r border-gray-400">#</th>
            <th className="py-3 border-r border-gray-400">Title</th>
            <th className="py-3 border-r border-gray-400">Author</th>
            <th className="py-3 border-r border-gray-400">Address</th>
            <th className="py-3 border-r border-gray-400">Category</th>
            <th className="py-3 border-r border-gray-400">Action</th>
          </tr>
          {FakeData.map((val, key) => {
            return (
              <tr
                className="items-center outline outline-1 outline-gray-300 w-full"
                key={key}
              >
                <td className=" border-r border-gray-400 pl-1 w-8 py-3">
                  {val.id}
                </td>
                <td className="border-r border-gray-400  py-3 w-40 pr-3">
                  {val.recipe}
                </td>
                <td className=" border-r border-gray-400 py-3 w-60 pr-3">
                  {val.author}
                </td>
                <td className=" border-r border-gray-400 py-3 w-96 pr-3">
                  {val.address}
                </td>
                <td className=" border-r border-gray-400 py-3 w-36 ">
                  {val.category}
                </td>
                <td className="border-r border-gray-400 flex text-center justify-around w-32 mt-4 gap-3 px-6 p-3 h-full py-3">
                  <Link to="/">
                    <GrView
                      className="text-blue-400 hover:text-blue-200"
                      size={25}
                    />{" "}
                  </Link>
                  <Link to="/admin/update">
                    <GoPencil
                      className="text-yellow-400 hover:text-yellow-200"
                      size={25}
                    />
                  </Link>

                  <Link to="/admin/delete">
                    <FaTrashAlt
                      className="text-red-400 hover:text-red-200"
                      size={25}
                    />
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
};

export default Table;
