import React from 'react'
import Logo from "@/assets/img/logo.svg"
import Image from 'next/image'
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <section className="bg-[#272727] pb-10 mt-[50px] md:mt-[80px]">
      <div className="">
        <div className='grid grid-cols-12'>
          <div className='py-5 px-5 border border-[#4F4F4F] col-span-2'>
            <Image src={Logo} alt="no-logo" />
          </div>
          <div className='py-5 px-2 border border-[#4F4F4F] flex justify-center items-center'>
            <Icon icon="ic:baseline-facebook" width="24" height="24" className="text-white" />
          </div>
          <div className='py-5 px-2 border border-[#4F4F4F] flex justify-center items-center'>
            <Icon icon="mdi:twitter" width="24" height="24" className="text-white" />
          </div>
          <div className='py-5 px-2 border border-[#4F4F4F] flex justify-center items-center'>
            <Icon icon="mdi:youtube" width="24" height="24" className="text-white" />
          </div>
          <div className='py-5 px-2 border border-[#4F4F4F] flex justify-center items-center'>
            <Icon icon="mdi:linkedin" width="24" height="24" className="text-white" />
          </div>
          <div className='py-5 px-2 border border-[#4F4F4F] flex justify-center items-center'>
            <Icon icon="mdi:instagram" width="24" height="24" className="text-white" />
          </div>
          <div className='py-5 px-2 border border-[#4F4F4F] flex gap-1 items-center col-span-3'>
            <Icon icon="ic:baseline-email" width="24" height="24" className="text-white" />
            <p className='text-white'>
              info@bluetickacademy.com
            </p>
          </div>
          <div className='py-5 px-2 border border-[#4F4F4F] flex gap-1 items-center col-span-2'>
            <Icon icon="gg:phone" width="24" height="24" className="text-white" />
            <p className='text-white'>
              +91-9606 9955 25
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 px-8 py-10'>
          <div className='col-span-2 '>
          <p className='text-white py-2'>Quick Link</p>
          <div className='flex gap-5'>
            <span className='flex gap-2 text-white'>
              <Icon icon="weui:arrow-outlined" width="12" height="24" className='text-[#FE4855]' />
              Home
            </span>
            <span className='flex gap-2 text-white'>
              <Icon icon="weui:arrow-outlined" width="12" height="24" className='text-[#FE4855]' />
              About us
            </span>
            <span className='flex gap-2 text-white'>
              <Icon icon="weui:arrow-outlined" width="12" height="24" className='text-[#FE4855]' />
              Our Courses
            </span>
            <span className='flex gap-2 text-white'>
              <Icon icon="weui:arrow-outlined" width="12" height="24" className='text-[#FE4855]' />
              Contact us
            </span>
          </div>
          </div>
          <div>
            <p className='text-white font-semibold text-[20px] py-3'>Sign up to our</p>
            <p className='text-white text-[16px] my-2'>Keep yourself up to date with the latest hiring news and course updates.</p>
            <input type="email" id="email" class="bg-[#3C3C3C] border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 my-3" placeholder="Email address*" required />
            <button type="button" className="text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-medium rounded-lg text-lg px-8 w-full py-2 text-center me-2 mb-2 my-3">SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer