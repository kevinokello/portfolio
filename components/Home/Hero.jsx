import React from "react";

import Section from "../Customs/Section";
import Image from "next/image";
import { HiDownload, HiEye } from "react-icons/hi"

const Hero = () => {
  return (
    <Section id="intro" className="relative !h-full !py-10 md:!py-20 overflow-x-clip">
      <div className="flex flex-row justify-between items-center flex-wrap-reverse p-2">
        <div className="flex-grow text-center lg:text-start  w-1/2">
          <h1 className="title-font sm:text-4xl text-2xl mb-2 font-bold ">
            Hi 👋, I Am Kevin Okello
            </h1>
            <h3 className="text-lg mt-1 opacity-90 font-normal capitalize ">
          A Full Stack Web Developer
            </h3>
            <div className="w-24 h-1 bg-primary bg-opacity-70 mt-6 mb-4">
              <div className="w-10 h-1 bg-primary"></div>
            </div>

          <p className="mb-6 mt-2 xl:w-[80%] leading-relaxed text-textSecondary font-medium dark:text-textDarkSecondary opacity-70 text-xs md:text-sm">
            Lorem ipsum dolor, sit amet consectetur apsum animi! Minima modi pariatur, delectus asperiores aspernatur magnam voluptates soluta tempora accusantium?
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start">
            <div>
              <a href="/">
                <button
                  type="button"
                  className="outline-none text-xs md:text-sm text-white bg-gradient-to-r from-primary/80 via-secondary/60 to-secondary/80 hover:from-primary hover:via-secondary/80 hover:to-secondary transition-all duration-300 font-medium rounded-lg text-md opacity-90 hover:opacity-100 py-2.5 px-4 text-center mr-2 mb-3 flex justify-center items-center"
                >
                  <HiDownload className="mr-2 w-5 h-5" />
                  Download CV
                </button>
              </a>
            </div>
            <div>
              <button onClick={() => document.querySelector("#work").scrollIntoView({ behavior: "smooth" })} className="relative inline-flex items-center  justify-center p-0.5 mb-3 mr-2 overflow-hidden text-xs md:text-sm font-medium  rounded-lg group bg-gradient-to-br from-primary/80 via-secondary/60 to-secondary/80 group-hover:from-primary group-hover:via-secondary/80 group-hover:to-secondary hover:text-white dark:text-white outline-none">
                <span className="relative text-primary flex justify-center items-center hover:text-white px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <HiEye className="mr-2 w-5 h-5 transition-none" />
                  View Projects
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6 mx-auto text-center select-none relative">
          <Image
            className="object-cover object-center rounded-xl rounded-tl-[200px] z-10 "
            alt="hero"
            width={550}
            height={400}
            src="/images/me.jpeg"
          />
        </div>
      </div>

    </Section>
  );
};

export default Hero;
