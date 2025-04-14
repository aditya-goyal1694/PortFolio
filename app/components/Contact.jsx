import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "074448a3-e11e-4c82-aea9-d32ab07e1e32");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-4 md:px-8 lg:px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
    bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Connect with me
      </h4>

      <h2 className='text-center text-5xl font-Ovo'>
        Get in touch
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10 mb-8'>
        <div className='relative group'>
          <input 
            type='text' 
            placeholder='Enter your name' 
            required 
            name='name'
            className='w-full p-4 outline-none border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm
              transition duration-300 focus:border-blue-400 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]
              hover:border-gray-300 placeholder:text-gray-400'
          />
          <div className='absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 
            group-focus-within:w-full'></div>
        </div>
        
        <div className='relative group'>
          <input 
            type='email' 
            placeholder='Enter your email' 
            required 
            name='email'
            className='w-full p-4 outline-none border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm
              transition duration-300 focus:border-blue-400 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]
              hover:border-gray-300 placeholder:text-gray-400'
          />
          <div className='absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 
            group-focus-within:w-full'></div>
        </div>
      </div>

      <div className='relative group mb-8'>
        <textarea 
          rows={6} 
          placeholder='Enter your message' 
          required 
          name='message'
          className='w-full p-4 outline-none border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm
            transition duration-300 focus:border-blue-400 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]
            hover:border-gray-300 placeholder:text-gray-400 resize-none'
        />
        <div className='absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 
          group-focus-within:w-full'></div>
      </div>
      
      <button 
        type='submit' 
        className='group flex items-center justify-center gap-2 bg-black text-white rounded-full
          py-4 px-8 mx-auto transition-all duration-300 hover:bg-black/90 hover:scale-[1.03]
          hover:shadow-lg active:scale-[0.97]'
      >
        Submit
        <Image 
          src={assets.right_arrow_white} 
          alt='Submit' 
          className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' 
        />
      </button>

      <p className='mt-4'>{result}</p>
    </form>
    </div>
  )
}

export default Contact