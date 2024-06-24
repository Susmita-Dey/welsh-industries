"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center max-w-full w-full mb-2">
      <div className="flex mt-5 md:ml-14 ml-4 items-start sm:mt-4">
        <Image
          src="/WELSG.png"
          alt="logo"
          width={1000}
          height={500}
          className="h-full object-contain w-full sm:h-16"
        />
      </div>
      <div className="hidden sm:flex flex-col">
        <div className="-mt-5 flex flex-col sm:flex-row sm:justify-between items-center bg-[url('/image-1.png')] bg-cover bg-no-repeat py-4 px-4">
          <p className="text-white font-bold text-sm sm:text-base ml-4 sm:ml-12 mt-2">
            Don&apos;t Wait! Call us today for a free quote!
          </p>
          <span className="flex flex-col sm:flex-row gap-4 mt-2">
            <p className="flex text-white font-bold text-base">
              <IoCallOutline className="text-lg mr-2 mt-1" /> 0408 670 612
            </p>
            <p className="flex text-white font-bold text-base">
              <TfiEmail className="text-lg mr-2 mt-1" />{" "}
              contact@welshindustries.com.au
            </p>
          </span>
        </div>
        <div className="flex flex-row gap-4 mx-8 my-2">
          <ul className="flex gap-8 uppercase font-extrabold mx-8">
            <li className="mt-2 underline underline-offset-4 decoration-2 decoration-green-700 text-green-700">
              Home
            </li>
            <select
              name="About"
              id="about"
              className="uppercase bg-transparent"
            >
              <option value="About 1">About 1</option>
              <option value="About 2">About 2</option>
              <option value="About 3">About 3</option>
              <option value="About 4">About 4</option>
            </select>
            <select
              name="Services"
              id="services"
              className="uppercase bg-transparent"
            >
              <option value="Services 1">Services 1</option>
              <option value="Services 2">Services 2</option>
              <option value="Services 3">Services 3</option>
              <option value="Services 4">Services 4</option>
            </select>
            <li className="mt-2">Projects</li>
            <li className="mt-2">Careers</li>
            <li className="mt-2">Safety</li>
            <li className="mt-2">Contact</li>
          </ul>
          <button className="flex px-8 py-2 btn-primary font-bold">
            Get A Free Quote <FaArrowRight className="text-xl ml-2 mt-1" />
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:hidden items-end w-full">
        <div className="-mt-5 flex flex-col sm:flex-row sm:justify-between items-center bg-[url('/image-1.png')] bg-cover bg-no-repeat bg-center py-4 px-4 w-full">
          <p className="text-white font-bold text-xs ml-4 sm:ml-12 mt-2">
            Don&apos;t Wait! Call us today for a free quote!
          </p>
          <span className="flex flex-col sm:flex-row gap-1 mt-2 sm:mt-0">
            <p className="flex text-white font-bold text-xs">
              <IoCallOutline className="text-sm mr-2 mt-1" /> 0408 670 612
            </p>
            <p className="flex text-white font-bold text-xs">
              <TfiEmail className="text-sm mr-2 mt-1" />{" "}
              contact@welshindustries.com.au
            </p>
          </span>
        </div>
        <button onClick={toggleMobileMenu} className="text-2xl z-50">
          {!isMobileMenuOpen && <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-30 flex flex-col items-center p-4">
          <button onClick={toggleMobileMenu} className="self-end text-2xl mb-4">
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-4 uppercase font-bold">
            <li className="mt-2 underline underline-offset-4 decoration-2 decoration-green-700 text-green-700">
              Home
            </li>
            <select
              name="About"
              id="about"
              className="uppercase bg-transparent"
            >
              <option value="About 1">About 1</option>
              <option value="About 2">About 2</option>
              <option value="About 3">About 3</option>
              <option value="About 4">About 4</option>
            </select>
            <select
              name="Services"
              id="services"
              className="uppercase bg-transparent"
            >
              <option value="Services 1">Services 1</option>
              <option value="Services 2">Services 2</option>
              <option value="Services 3">Services 3</option>
              <option value="Services 4">Services 4</option>
            </select>
            <li className="mt-2">Projects</li>
            <li className="mt-2">Careers</li>
            <li className="mt-2">Safety</li>
            <li className="mt-2">Contact</li>
          </ul>
          <button className="flex px-6 py-2 btn-primary font-bold mt-4">
            Get A Free Quote <FaArrowRight className="text-xl ml-2 mt-1" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
