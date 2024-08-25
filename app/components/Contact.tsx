import React from "react";
import HeroButton from "./ui/HeroButton";
import { socials } from "../data";

function Contact() {
  return (
    <div className="mt-16">
      <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-custom-white/[0.03] bg-grid-custom-black/[0.2]  flex  justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className=" max-w-[80vw] mx-auto sm:max-w-[60vw]">
          <div className="text-3xl sm:text-5xl font-bold text-white text-center">
            Wanna <span className="text-purple">Connect</span>{" "}
            <span className="text-purple">?</span>
          </div>
          <div className="my-10">
            <h1 className="text-slate-300 text-2xl text-center sm:text-left">
              whether it is a feedback or want to collabrate on a project just
              <span className="text-purple"> mail me</span>{" "}
            </h1>
          </div>

          <div className=" text-center mt-10">
            <HeroButton
              url="mailto:himanshu.yadav3477@gmail.com"
              text="Lets Connect"
            />
          </div>
          <div className="flex justify-center items-center my-10">
            {socials.map((social, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-10 h-10 flex justify-center items-center overflow-hidden bg-white mx-2 sm:mx-3 hover:bg-purple   hover:scale-110 transition duration-300 ease-in-out hover:ease-in-out relative"
              >
                <a
                  href={social.link}
                  target="_blank"
                  className="sm:max-w-[90%]"
                >
                  <img src={social.icon} alt="icon5" className="p-2  " />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
