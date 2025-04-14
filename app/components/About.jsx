import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full px-4 md:px-[12%] py-8 md:py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-base md:text-lg font-Ovo">
        Introduction
      </h4>
      <h2 className="text-center text-3xl md:text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-8 md:gap-20 my-6">
        <div className="w-48 sm:w-64 md:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_pic}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-6 md:mb-10 max-w-4xl font-Ovo text-sm md:text-base">
            I'm Aditya Goyal, a Computer Science undergraduate at Lovely
            Professional University with a CGPA of 9.01. I'm passionate about
            building efficient, scalable, and user-centric software solutions. My
            experience spans full-stack web development with the MERN stack,
            backend systems using Go and FastAPI, and data analytics with Python
            libraries like Pandas, NumPy, and Folium. Projects like Foodie-Fiesta,
            US-Accidents-EDA, and custom STL implementations in C++ highlight my
            ability to work across diverse domains. I'm also actively exploring
            DevOps practices and honing my problem-solving skills through
            competitive programming.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-4 md:p-6 cursor-pointer 
                hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500"
                key={index}
              >
                <Image src={icon} alt={title} className="w-6 md:w-7 mt-2 md:mt-3" />
                <h3 className="my-3 md:my-4 font-semibold text-gray-700 text-sm md:text-base">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-4 md:my-6 text-gray-700 font-Ovo text-base md:text-lg">
            Tools I use
          </h4>

          <ul className="flex flex-wrap items-center gap-2 md:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-8 sm:w-10 md:w-12 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-4 sm:w-6 md:w-8" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;