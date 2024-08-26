import React from "react";

import HeroButton from "./ui/HeroButton";
import { FaPrayingHands } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function Hero() {
  return (
    <div>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.12] bg-grid-black/[0.2]  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white sm:[mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div>
        <div className="text-white sm:px-40 px-10">
          <div className="flex flex-col justify-center items-center sm:items-start sm:flex-row sm:space-x-52">
            <div className="order-2 sm:order-1 ">
              <div className="flex items-center ">
                <TextGenerateEffect
                  words={"Namaste"}
                  className="text-orange-400  text-[60px] sm:text-[90px] "
                />
                <FaPrayingHands
                  className="text-4xl sm:text-[60px] "
                  color="orange"
                />
              </div>
              <div className=" ">
                <h1 className="text-[30px] sm:text-[40px] font-semibold">
                  I&apos;m Himanshu Yadav
                </h1>
                <h2 className="my-3 font-semibold text-purple ">
                  {" "}
                  <span className="text-blue-300 "> {"<Role>"} </span>
                  Full Stack Developer{" "}
                  <span className="text-blue-300"> {"</Role>"} </span>
                </h2>
                <h2 className="max-w-[50vw] sm:max-w-[20vw] my-5 text-gray-400 ">
                  {" "}
                  I love to solve complex problem whether they are in real life
                  or in code.
                </h2>

                <div className="text-center sm:text-left">
                  <HeroButton
                    url="https://drive.google.com/file/d/1-m2QcTr4E-9hJWll-hVOMO7hxYG941LY/view?usp=sharing"
                    text="Download Resume"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 sm:order-2 bg-gradient-to-b from-transparent to-orange-200 rounded-lg ">
              <img
                src="/image1.png"
                alt=""
                className="max-w-[45vw] sm:max-w-[25vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
