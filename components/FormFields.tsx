import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const FormFields = () => {
  return (
    <div className="flex flex-col justify-center bg-white w-full h-full rounded-sm">
      <div className="flex flex-col p-8">
        <h3 className="font-extrabold text-2xl md:text-3xl mb-3">
          BOOK YOUR FREE ON-SITE INSPECTION AND QUOTE!
        </h3>
        <form action="" className="w-full grid grid-flow-row gap-4">
          <div className="grid md:grid-flow-col gap-4">
            <div className="relative col-span-3 md:w-[27rem]">
              <input
                type="text"
                name="name"
                className="block w-full p-2 ps-4 text-base  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-900 placeholder:text-gray-900  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-semibold placeholder:font-semibold"
                placeholder="Name"
                required
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <AiOutlineUser className="text-xl" />
              </div>
            </div>
            <div className="relative col-span-3 md:w-[27rem]">
              <input
                type="tel"
                name="phone"
                className="block w-full p-2 ps-4 text-base rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-semibold placeholder:font-semibold"
                placeholder="Phone"
                required
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <FiPhoneCall className="text-xl" />
              </div>
            </div>
            <div className="relative col-span-3 md:w-[27rem]">
              <input
                type="email"
                name="email"
                className="block w-full p-2 ps-4 text-base  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-semibold placeholder:font-semibold"
                placeholder="Email"
                required
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <TfiEmail className="text-xl" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-flow-col gap-4">
            <div className="relative col-span-3 md:w-[55rem]">
              <input
                type="text"
                name="text"
                className="block w-full p-2 ps-4 text-base rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-semibold placeholder:font-semibold"
                placeholder="How Can We Help"
                required
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <BiPencil className="text-xl" />
              </div>
            </div>
            <button
              type="submit"
              className="relative grid md:col-span-2 col-span-3 btn-primary md:w-[27rem]"
            >
              <p className="block w-full text-start p-2 ps-4 text-base font-bold">
                Book Now
              </p>
              <span className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <FaArrowRight className="text-xl" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormFields;
