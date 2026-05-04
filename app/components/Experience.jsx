'use client'
import { assets, experienceData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp) => {
    setSelectedExp(exp);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div id="experience" className="w-full px-4 md:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Professional Journey
      </h4>
      <h2 className="text-center text-5xl font-Ovo">Work Experience</h2>

      <div className="grid grid-cols-1 gap-8 my-10">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="border-[0.5px] border-gray-400 rounded-2xl p-6 md:p-8 
            hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 cursor-default bg-white"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 font-Outfit">
                  {exp.title}
                </h3>
                <p className="text-rose-600 font-medium text-lg">{exp.company}</p>
              </div>
              <p className="text-gray-500 font-Ovo">{exp.duration}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-3 mb-8">
              {exp.summary.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  <span className="text-rose-500 mt-1.5">•</span>
                  {point}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openModal(exp)}
              className="flex items-center gap-2 px-6 py-3 border border-gray-500 rounded-full 
              hover:bg-gray-100 transition duration-300 font-Ovo group"
            >
              View Details
              <Image src={assets.right_arrow} alt="" className="w-4 group-hover:translate-x-1 duration-300" />
            </button>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {isModalOpen && selectedExp && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <Image src={assets.close_black} alt="close" className="w-6" />
            </button>

            <div className="p-6 md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-Outfit font-bold text-gray-900 mb-2">
                  Detailed Case Studies
                </h2>
                <p className="text-rose-600 text-lg font-Ovo">{selectedExp.company} — {selectedExp.title}</p>
              </div>

              <div className="space-y-10">
                {selectedExp.caseStudies.map((study, index) => (
                  <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm">
                            {index + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 font-Outfit">
                        {study.title}
                        </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-12">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Problem</h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{study.problem}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Solution</h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{study.solution}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Impact</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">{study.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
