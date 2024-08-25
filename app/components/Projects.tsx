import React from "react";
import { projects } from "../data";
import { GlareCard } from "./ui/glare-card";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

function Projects() {
  return (
    <section id="#projects">
      <div className=" max-w-[80vw] mx-auto sm:max-w-[60vw]">
        <div className="text-3xl font-bold text-white text-center">
          A Small Selection of <span className="text-purple ">My Projects</span>
        </div>
        <div className=" flex flex-wrap items-center justify-center  p-4 gap-16 my-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="text-white rounded-[3rem] overflow-hidden transform hover:scale-110 transition duration-300 ease-in-out hover:ease-in-out relative bg-black-200 w-[70vw] h-[40vh] sm:w-[20vw]  lg:h-[46vh]  "
            >
              <div className="mb-2  h-[20vh] sm:h-[28vh]  overflow-hidden  ">
                <img
                  src={project.img}
                  alt=""
                  className="h-[20vh] sm:h-[28vh] object-cover w-full"
                />
              </div>
              <div className=" px-1 sm:px-3 ">
                <div className="ml-3">
                  <h1 className="my-3 font-semibold text-md sm:text-lg line-clamp-1 ">
                    {project.title}
                  </h1>
                  <h1 className="my-3  text-sm sm:text-md line-clamp-2 ">
                    {project.des}
                  </h1>
                </div>
                <div className="flex items-center justify-between mt-7 mb-3 ml-3">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-8 h-8 flex justify-center items-center "
                        style={{
                          transform: `translateX(-${5 * index + 7}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex  space-x-1 mr-3">
                    <a href={project.github} target="_blank">
                      <div className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-8 h-8 flex justify-center items-center hover:border-purple">
                        <FaGithub />
                      </div>
                    </a>
                    <a href={project.link} target="_blank">
                      <div className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-8 h-8 flex justify-center items-center hover:border-purple ">
                        <FaLocationArrow className="text-base sm:text-sm" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      ;
    </section>
  );
}

export default Projects;
