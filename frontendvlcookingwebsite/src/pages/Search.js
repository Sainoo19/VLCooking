import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../components/CartIcon";
import Items from "../components/Items";
import CartData from "../data/cartdata.json";
import Data from "../data/data.json";

export default function Search() {
  const [listings, setListings] = useState([]);
  const [loadings, setLoadings] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [itemCount, setItemCount] = useState(CartData.length); // Thêm state cho itemCount
  const handleAddToCart = (item) => {
    setItemCount(itemCount + 1);
  };

  useEffect(() => {
    const fetchVLU = async () => {
      try {
        setLoadings(true);
        const data = Data;
        setListings(data);
        setLoadings(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVLU();
  }, []);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setSearchData({ ...searchData, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSearchData({ ...searchData, searchTerm: e.target.value });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setSearchData({
        ...searchData,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split("_")[1] || "desc";

      setSearchData({ ...searchData, sort, order });
    }
  };

  console.log(searchData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7  border-b-2 md:border-r-2 md:min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
              onChange={handleChange}
              value={searchData.searchData}
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2 items-center">
              <input
                onChange={handleChange}
                type="checkbox"
                id="all"
                value={searchData.type === "all"}
                className="w-5"
              />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                onChange={handleChange}
                type="checkbox"
                id="rent"
                value={searchData.type === "rent"}
                className="w-5"
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                onChange={handleChange}
                type="checkbox"
                id="sale"
                value={searchData.type === "sale"}
                className="w-5"
              />
              <span>Sale</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                onChange={handleChange}
                type="checkbox"
                id="offer"
                value={searchData.offer}
                className="w-5"
              />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2 items-center">
              <input
                onChange={handleChange}
                type="checkbox"
                id="parking"
                value={searchData.parking}
                className="w-5"
              />
              <span>Parking</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                onChange={handleChange}
                type="checkbox"
                id="furnished"
                value={searchData.furnished}
                className="w-5"
              />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select
              id="sort_order"
              onChange={handleChange}
              defaultValue={"created_at_desc"}
              className="border rounded-lg p-3"
            >
              <option>Price high to low</option>
              <option>Price low to hight</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loadings && listings.length === 0 && (
            <p className="text-xl text-slate-700">No listing found!</p>
          )}
          {loadings && (
            <p className="text-xl text-slate-700 text-center w-full">
              Loading...
            </p>
          )}

          {!loadings &&
            listings &&
            listings.map((listing) => (
              <Items
                key={listing._id}
                listing={listing}
                handleAddToCart={handleAddToCart}
              />
            ))}
        </div>
      </div>
      <Link to="/cart">
        <CartIcon itemCount={itemCount} />
      </Link>
    </div>
  );
}
