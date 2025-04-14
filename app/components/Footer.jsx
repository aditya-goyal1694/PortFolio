import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.name_black} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6' />
            aditya.goyal1694@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Aditya Goyal. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://www.linkedin.com/in/aditya-goyal18/">Linkedin</a></li>
            <li><a target='_blank' href="https://github.com/aditya-goyal1694">Github</a></li>
            <li><a target='_blank' href="https://leetcode.com/u/Aditya_Goyal1694/">LeetCode</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
