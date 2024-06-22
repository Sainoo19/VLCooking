import React from "react";
import { FaFacebook, FaInstagram, FaYahoo, FaYoutube } from "react-icons/fa";
import VLCook from "../assets/VLCook.png";

export default function Footer() {
  return (
    <footer className="bg-slate-300 pt-5 inset-0 bottom-0 sm:text-lg">
      <div className="flex justify-around max-w-6xl mt-1">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col items-center max-w-6xl p-3 sm:text-lg sm:content-center">
            <h1 className="font-bold justify-center text-sm sm:text-xl flex flex-wrap w-96 max-h-58 mt-4 mb-12">
              <img
                src={VLCook}
                alt="Cooking Logo"
                className=" h-32  sm: max-h-20"
              />
            </h1>
            <div className="flex flex-col-reverse w-64 mt-22">
              <div className="flex flex-row justify-center">
                <div className="p-4">
                  <FaFacebook />
                </div>
                <div className="p-4">
                  <FaInstagram />
                </div>
                <div className="p-4">
                  <FaYoutube />
                </div>
                <div className="p-4">
                  <FaYahoo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-10 sm:inline hidden">
          <ul className="mr-10 items-center sm:inline">
            <li className="font-bold p-4">Topic</li>
            <li className="p-4">About</li>
            <li className="p-4">About</li>
          </ul>
        </div>
        <div className="flex justify-between gap-10 sm:inline hidden">
          <ul className="mr-10 items-center sm:inline">
            <li className="font-bold p-4">Topic</li>
            <li className="p-4">About</li>
            <li className="p-4">About</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
