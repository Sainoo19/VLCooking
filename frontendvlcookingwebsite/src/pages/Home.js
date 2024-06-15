import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Items from "../components/Items";
import Data from "../data/data.json";

export default function Home() {
  const [Feature, setFeature] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchVLU = async () => {
      try {
        const data = Data;
        setFeature(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVLU();
  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col items-center justify-center gap-6 p-28 px-3 max-w-6xl  mx-auto">
        <h1 className="text-slate-700 text-center font-bold text-3xl lg:text-6xl tex">
          Cook easy with
          <br />
          VLCook
        </h1>
        <div className="text-gray-400 text-center text-xs sm:text-sm">
          "VLCook brings you specialty dishes from Vietnam and around the world,
          <br />
          prepared to master chef standards."
        </div>
        <Link
          to={"/"}
          className="p-3 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:underline"
        >
          Let's Start Now
        </Link>
      </div>
      {/* swiper */}
      <Swiper navigation>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/11742808/pexels-photo-11742808.jpeg?cs=srgb&dl=pexels-lathinh-11742808.jpg&fm=jpg"
            className="h-[500px]"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1337974/pexels-photo-1337974.jpeg?cs=srgb&dl=pexels-minan1398-1337974.jpg&fm=jpg"
            className="h-[500px]"
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      </Swiper>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {Feature && Feature.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">Feature</h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/about"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {Feature.map((listing) => (
                <Items listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
