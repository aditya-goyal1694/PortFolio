import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-4 md:px-8 lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        What I've built!
      </h4>

      <h2 className='text-center text-5xl font-Ovo'>
        My recent projects
      </h2>

      <p className='text-center mx-auto mt-5 text-left font-Ovo'>
      I have developed a wide array of projects spanning multiple domains and technologies, reflecting my passion for building 
      impactful solutions and my adaptability across stacks. My experience includes full-stack web development using the MERN stack 
      and TypeScript, showcased in projects like Foodie-Fiesta, a dynamic food-ordering platform integrated with an AI-powered chatbot 
      built using Dialogflow. On the backend, I've worked extensively with Go, creating high-performance systems such as a concurrent 
      Ticket Booking System and a Bookstore Management API powered by Gorilla Mux and MySQL, with full support for CRUD operations and 
      asynchronous processing via Goroutines.
      </p>
      <p className='text-center mx-auto mt-5 text-left font-Ovo'>
      In the realm of data analytics, I explored large datasets using Python, employing tools like Pandas, NumPy, Matplotlib, Seaborn, and 
      Folium. One such project, US-Accidents-EDA, dives deep into traffic accident patterns across the United States, delivering insights 
      through visual and geographic analysis. I also have a solid background in system-level programming using C and C++, where I've implemented 
      core computer science concepts — such as a custom Standard Template Library(STL) and a simulation of the Aging Algorithm to address 
      starvation in process scheduling.
      </p>
      <p className='text-center mx-auto mt-5 mb-12 text-left font-Ovo'>
      Together, these projects highlight my ability to build scalable systems, craft intuitive user experiences, and extract meaningful insights 
      from data — all while working across modern development ecosystems.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 max-w-[1600px] mx-auto'>
        {workData.map((project, index) => (
          <a 
          key={index}
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='relative aspect-square cursor-pointer group overflow-hidden rounded-lg max-w-[400px] w-full mx-auto'
        >
          <Image 
            src={project.bgImage}
            alt={project.title}
            fill
            className='object-cover'
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 23vw"
          />

          <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex 
            items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
              <h2 className='font-semibold'>{project.title}</h2>
              <p className='text-sm text-gray-700'>{project.description}</p>
            </div>

            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center 
              shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-colors'>
              <Image 
                src={assets.send_icon} 
                alt='send icon' 
                className='w-5 h-5'
              />
            </div>
          </div>
        </a>
        ))}
      </div>

      {/* <a 
        href="" 
        className='group w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300
          rounded-full py-3 px-8 md:px-10 mx-auto mt-16 mb-8 font-Ovo transition-all duration-300
          hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
      >
        Show more
        <Image 
          src={assets.right_arrow_bold} 
          alt='Right arrow' 
          className='w-4 transition-transform duration-300 group-hover:translate-x-1' 
        />
      </a> */}
    </div>
  )
}

export default Projects