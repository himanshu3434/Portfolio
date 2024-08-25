import React from "react";

function About() {
  return (
    <div>
      <div className=" max-w-[80vw] mx-auto sm:max-w-[60vw] py-6">
        <div className="text-3xl font-bold text-white text-center py-8">
          <span className="text-purple ">About Me</span>
        </div>

        <div className="text-white text-md sm:text-xl  max-w-[70vw] sm:max-w-[40vw]   mx-auto pb-8 text-center sm:text-left">
          <h1>
            I am a full stack developer and i have worked on many projects. I
            have experience in working with React, Node, Express, MongoDB,
            Typscript and many more technologies.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
