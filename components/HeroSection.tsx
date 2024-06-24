import React from "react";
import { FaFacebook, FaArrowRight } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoCallOutline } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";

export const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col items-center bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-4 py-16 w-11/12 text-balance text-white">
        <h2 className="md:text-5xl text-3xl w-full font-black md:w-1/2 leading-tight">
          VICTORIA&apos;S <span className="green-highlight">MOST TRUSTED</span>{" "}
          CIVIL CONTRACTING AND EARTHWORKS EXPERTS
        </h2>
        <p className="text-xl font-bold leading-tight">
          SETTING NEW STANDARDS AND DELEVIRING A{" "}
          <span className="green-highlight">
            STRESS
            <br /> FREE
          </span>{" "}
          EXPERIENCE EVERY TIME.
        </p>
        <div className="flex md:flex-row flex-col gap-4 mt-2">
          <div className="flex bg-black/25 p-3 gap-2 font-semibold">
            <div className="bg-blue-700 p-3 flex justify-center items-center">
              <FaFacebook className="text-xl text-center" />
            </div>
            <span className="flex flex-col">
              <span className="flex flex-row gap-1">
                <p>5.0</p>
                <span className="flex gap-0">
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                </span>
              </span>
              <p>Based On 10 Reviews</p>
            </span>
          </div>
          <div className="flex bg-black/25 p-3 gap-2 font-semibold">
            <div className="bg-white p-3 flex justify-center items-center">
              <FcGoogle className="text-xl text-center" />
            </div>
            <span className="flex flex-col">
              <span className="flex flex-row gap-1">
                <p>5.0</p>
                <span className="flex gap-0">
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                  <MdStarRate className="text-[#FFD700] text-base mt-1" />
                </span>
              </span>
              <p>Based On 6 Reviews</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 my-2">
          <span className="flex font-bold text-lg">
            <FaRegSquareCheck className="text-xl green-highlight mr-2 mt-1" />{" "}
            Over 7 Years Of Experience
          </span>
          <span className="flex font-bold text-lg">
            <FaRegSquareCheck className="text-xl green-highlight mr-2 mt-1" />{" "}
            High Quality Service - Guaranteed
          </span>
          <span className="flex font-bold text-lg">
            <FaRegSquareCheck className="text-xl green-highlight mr-2 mt-1" />{" "}
            Serving The Entire State Of Victoria
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-2 text-black">
          <button className="flex px-6 py-2 bg-white font-bold">
            <IoCallOutline className="text-xl mr-2 mt-1" />
            0408 670 612
          </button>
          <button className="flex px-6 py-2 btn-primary font-bold">
            Book A Free On-Site Inspection Quote{" "}
            <FaArrowRight className="text-xl ml-2 mt-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
