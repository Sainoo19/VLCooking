import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import VLCook from "../assets/LogoVLCooking.png";

export default function Footer() {
  return (
    <footer className="bg-slate-300 pt-5 inset-0 bottom-0 sm:text-lg">
      <div className="flex justify-around w-full mt-1">
        <div className="flex flex-col gap-10 -ml-48">
          <div className="flex flex-col items-center w-full p-3 sm:text-lg sm:content-center">
            <h1 className="font-bold justify-center text-sm sm:text-xl flex flex-wrap w-96 max-h-58 mt-4 mb-12">
              <img
                src={VLCook}
                alt="Cooking Logo"
                className=" h-32  sm: max-h-20"
              />
            </h1>
            <div className="flex flex-col-reverse w-64 mt-22">
              <div className="flex flex-row justify-center">
                <a
                  href="https://www.facebook.com/truongdaihocvanlang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/vanlanguniversity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/@vanlanguniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.tiktok.com/@vanlanguniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-10 sm:inline -mr-32 hidden">
          <ul className="mr-10 items-center sm:inline">
            <li className="font-bold p-4">Topic</li>
            <li className="p-4">About</li>
            <li className="p-4">About</li>
          </ul>
        </div>
        <div className="flex justify-between gap-10 sm:inline -ml-96 hidden">
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
