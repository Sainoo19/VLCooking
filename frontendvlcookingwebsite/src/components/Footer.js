import React from "react";
import { FaFacebook, FaInstagram, FaYahoo, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-300 inset-0 bottom-0">
      <div className="flex justify-between max-w-6xl mt-1">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col items-center max-w-6xl ml-36 p-3">
            <h1 className="font-bold justify-center text-sm sm:text-xl flex flex-wrap w-96 max-h-60 mt-8 mb-12">
              <span className="text-slate-500">VLU</span>
              <span className="text-slate-700">Cooking</span>
            </h1>
            <div className="flex flex-col-reverse w-64 mt-22">
              <div className="flex flex-row justify-center ">
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
        <div className="flex justify-between gap-10">
          <ul className="mr-10 items-center">
            <li className="font-bold p-4">Topic</li>
            <li className="p-4">About</li>
            <li className="p-4">About</li>
          </ul>
          <ul className="mr-10">
            <li className="font-bold p-4">Topic</li>
            <li className="p-4">About</li>
            <li className="p-4">About</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
