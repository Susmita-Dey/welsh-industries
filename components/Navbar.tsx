"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center max-w-full w-full mb-2">
      <div className="flex mt-5 md:ml-14 ml-4 items-start sm:mt-4">
        <Image
          src="/WELSG.png"
          alt="logo"
          width={1000}
          height={500}
          className="h-full w-full object-contain sm:w-32 sm:h-16"
        />
      </div>
      <div className="hidden sm:flex flex-col">
        <div className="-mt-5">
          <Image
            src="/image-1.png"
            alt="black"
            width={1000}
            height={500}
            className="h-full w-full object-fill"
          />
        </div>
        <div className="flex flex-row gap-4 mx-8 my-2">
          <ul className="flex gap-4 uppercase font-bold">
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
          <button className="flex px-6 py-2 btn-primary font-bold">
            Get A Free Quote <FaArrowRight className="text-xl ml-2 mt-1" />
          </button>
        </div>
      </div>
      <div className="flex sm:hidden items-center mr-4 mt-4">
        <button onClick={toggleMobileMenu} className="text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center mt-4 w-full relative z-10">
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
