"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Google from "@/assets/img/google.svg";
import Training from "@/assets/img/training.svg";
import Top from "@/assets/img/top.svg";
import Star from "@/assets/img/star.svg";
import Background from "@/assets/img/banner.jpg";
import Ok from "@/assets/img/ok.svg";
import Company_1 from "@/assets/img/company_1.png";
import Company_2 from "@/assets/img/company_2.png";
import Company_3 from "@/assets/img/company_3.png";
import Calender from "@/assets/img/calendar.svg";
import Attachment from "@/assets/img/attachment.png";
import Projects from "@/assets/img/project.svg";
import Student from "@/assets/img/student.svg";
import Trainer from "@/assets/img/trainer.svg";
import Record from "@/assets/img/record.svg";
import Course from "@/assets/img/course.png";
import BlogImg from "@/assets/img/blog_imag.png";
import Shoe from "@/assets/img/shoe.svg";
import Amazon from "@/assets/img/amazon.png";
import Logo1 from "@/assets/img/logo_1.png";
import Logo2 from "@/assets/img/logo_2.png";
import Logo3 from "@/assets/img/logo_3.png";
import Logo4 from "@/assets/img/logo_4.png";
import FormBack from "@/assets/img/formback.svg";
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import TestimonialSlider from '@/components/testimonail';
import MapWithPoints from '@/components/map';
import Accordion from '@/components/accardian';
import Captcha from "@/assets/img/captcha.png"

const allCards = [
  { id: 1, title: "Card 1", img: "https://source.unsplash.com/400x300/?nature,water" },
  { id: 2, title: "Card 2", img: "https://source.unsplash.com/400x300/?city,night" },
  { id: 3, title: "Card 3", img: "https://source.unsplash.com/400x300/?mountain,sunset" },
  { id: 4, title: "Card 4", img: "https://source.unsplash.com/400x300/?forest,road" },
  { id: 5, title: "Card 5", img: "https://source.unsplash.com/400x300/?beach,sand" },
  { id: 6, title: "Card 6", img: "https://source.unsplash.com/400x300/?desert,dunes" },
];

function Home() {
  const [visibleCards, setVisibleCards] = useState(3);

  const handleLoadMore = () => {
    setVisibleCards(allCards.length);
  };

  const handleLoadLess = () => {
    setVisibleCards(3);
  };
  
  return (
    <>
      <section style={{
            backgroundImage: `url(${Background.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }} className="py-[40px] bg-[#0F1244]">
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 px-3">
            <div>
              <h2 className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent text-[50px] font-semibold uppercase">
                MASTER
              </h2>
              <p className="text-[16px] md:text-[60px] leading-[70px] font-semibold text-[#98C7F9]">
                DIGITAL <br /> MARKETING
              </p>
              <p className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent text-[50px] font-semibold uppercase">
                WITH AI
              </p>
              <p className="text-[#ffffff] text-[12px] md:text-[18px] mb-4">
                <strong className='font-[700] underline'>2025</strong> will be about AI-Powered Digital Marketing
              </p>

              <button type="button" className="text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-medium rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2">ENQUIRE NOW</button>
              <button type="button" className="text-white bg-[var(--Primary-color)] font-medium rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2">Explore Courses</button>

              <div className='mt-2 bg-[var(--Background-Card)] px-3 py-3 max-w-[400px] flex flex-wrap justify-center rounded-lg'>
                <span className='text-center border-r border-b border-[#343683] px-5 py-3'>
                  <Image className='mx-auto' width={20} height={20} src={Training} alt='no-training' />
                  <p className='text-white'>7+ years in training</p>
                </span>
                <span className='text-center px-5 py-3 border-b border-[#343683]'>
                  <Image className='mx-auto' width={20} height={20} src={Training} alt='no-training' />
                  <p className='text-white'>7+ years in training</p>
                </span>
                <span className='text-center px-5 py-3'>
                  <Image className='mx-auto' width={20} height={20} src={Training} alt='no-training' />
                  <p className='text-white'>7+ years in training</p>
                </span>
                <span className='text-center px-5 py-3 border-l border-[#343683]'>
                  <Image className='mx-auto' width={20} height={20} src={Training} alt='no-training' />
                  <p className='text-white'>7+ years in training</p>
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-[40px] lg:mt-1 relative">

              <div className="w-[55%] self-end">
                <Image
                  src={Google}
                  alt="no-technologyimg"
                  className="w-full h-auto"
                />
              </div>

              <div className='flex gap-2'>
                <div className="max-w-md p-6 bg-[#2C3A64] border rounded-lg shadow-sm flex gap-2">

                  <Image src={Top} alt='no-top' className='' />
                  <span className='rounded-md px-2 py-3 bg-gradient-to-b from-[rgba(96,211,247,0.4)] to-[rgba(139,140,249,0.4)] text-center'>
                    <p className='text-white uppercase'>
                      Rated based on best trained faculty and latest curriculum
                    </p>
                    <Image className='mx-auto' src={Star} alt='no-star' />
                  </span>
                </div>
                <div className="p-6 bg-[#272727] rounded-lg shadow-sm ">

                  <Image className='mx-auto' src={Ok} alt='no-ok' />
                  <span className='rounded-md px-2 py-3  text-center'>
                    <p className='text-white uppercase font-bold text-[20px]'>
                      <strong className='text-[#FE4855]'>100%</strong> JOB
                    </p>
                    <p className='uppercase text-white'>
                      ASSURED PROGRAMS
                    </p>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#F6F6F6]'>
        <Marquee
          loop={0}
          className="py-[40px] mb-[21px] sm:mb-[50px]"
        >
          <Image className="mx-6" src={Company_1} alt="no-productsimg1" />
          <Image className="mx-6" src={Company_2} alt="no-productsimg2" />
          <Image className="mx-6" src={Company_3} alt="no-productsimg3" />
          <Image className="mx-6" src={Company_1} alt="no-productsimg4" />
          <Image className="mx-6" src={Company_2} alt="no-productsimg5" />
          <Image className="mx-6" src={Company_3} alt="no-productsimg6" />
          <Image className="mx-6" src={Company_1} alt="no-productsimg7" />
          <Image className="mx-6" src={Company_2} alt="no-productsimg8" />
          <Image className="mx-6" src={Company_3} alt="no-productsimg9" />
          <Image className="mx-6" src={Company_1} alt="no-productsimg10" />
          <Image className="mx-6" src={Company_2} alt="no-productsimg11" />
          <Image className="mx-6" src={Company_3} alt="no-productsimg12" />
          <Image className="mx-6" src={Company_1} alt="no-productsimg13" />
          <Image className="mx-6" src={Company_2} alt="no-productsimg14" />
          <Image className="mx-6" src={Company_3} alt="no-productsimg15" />
        </Marquee>
      </section>

      <section className="mt-[40px] mb-[100px]">
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 px-3">

            <div className="flex flex-col justify-center items-center mt-[40px] lg:mt-1 bg-[#F9F7FF] pt-15">

              <div className='bg-white rounded-xl p-5 shadow-lg'>
                <div className='flex gap-2 '>
                  <div className='px-2 flex items-center justify-center bg-black rounded-[100%]'>
                    <Image className='w-[20px]' src={Calender} alt='no-calender' />
                  </div>
                  <span className='text-[24px]'>
                    In <strong className='text-[red] text-[28px]'>90 days</strong> Get
                  </span>
                </div>
                <p className='text-[26px] font-[700]'>
                  Trained | Hired | Ahead
                </p>
              </div>
              <Image
                src={Attachment}
                alt="no-attachment"
                className="max-[1024px]:w-[60%] max-[1300px]:w-[80%]"
              />
            </div>

            <div className='px-8 relative'>
            <Image src={FormBack} alt="Shoe" className="absolute right-0 bottom-0 z-[-10] h-full" />
              <p className='text-center text-[24px] font-[500] bg-[#F7F8F9] py-4 border border-[#f5f7f8] mx-[20px]'>Speak with Our <span className='font-bold border-b-[4px] border-[#FE7C55]'>Learning Advisor</span></p>

              <form className="mx-[20px] py-8 px-8 border-[#EEEEEE] border bg-white">
                <div className="mb-5">
                  <input type="text" id="name" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Name" required />
                </div>
                <div className="mb-5">
                  <input type="email" id="email" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email" required />
                </div>
                <div className="mb-5">
                  <input type="number" id="mobile_number" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Mobile" required />
                </div>
                <div className="mb-5">
                  <select id="countries" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option>Select Center</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="mb-5">

                
                  <div>
                    <p className='text-[#556376] py-2 font-semibold'>Learning Mode</p>
                    <div className='flex gap-2'>
                      <span className="flex items-center h-5">
                        <input id="online" type="radio" name="learning-mode" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <p className='text-[#556376] pl-2'>Online</p>
                      </span>
                      <span className="flex items-center h-5">
                        <input id="offline" type="radio" name="learning-mode" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <p className='text-[#556376] pl-2'>Offline</p>
                      </span>
                    </div>
                  </div>

                  {/* Captcha Placeholder */}
                  <div className="captcha-box border border-gray-300 rounded-lg p-2 flex items-center justify-between my-5 max-w-[300px]">
                    <span className='flex items-center'>
                    <input type="checkbox" id="captcha" className="mr-2 w-6 h-6" />
                    <label htmlFor="captcha" className="text-[#556376]">I am not a robot</label>
                    </span>
                    <Image src={Captcha} alt="no-captcha"/>
                  </div>
                </div>

                <button type="submit" className="text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-medium rounded-lg text-lg px-8 w-full py-2 text-center me-2 mb-2 my-3">Register</button>
              </form>


            </div>
          </div>
        </div>
      </section>


      <section className="mt-[50px] md:mt-[80px]  mb-[70px]">
        <p className="text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">The BlueTick Advantage</p>
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
          <div className="grid min-[600px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-4">
            <div className="max-[640px]:flex max-[640px]:justify-center text-center mt-[40px] px-[10px] sm:px-2 md:px-[30px] lg:px-[60px]">
              <div>
                <div className="flex justify-center">
                  <Image src={Projects} alt="no icons" />
                </div>
                <p className="text-neutral-900 text-[16px] md:text-[18px] font-semibold mt-3">Real Industry Projects</p>
                <p className=" text-center text-neutral-700 text-[16px] md:text-base font-normal leading-7">
                  (Work on Live Business)
                </p>
              </div>
            </div>
            <div className="max-[640px]:flex max-[640px]:justify-center text-center mt-[40px] px-[10px] sm:px-2 md:px-[30px] lg:px-[60px]">
              <div>
                <div className="flex justify-center">
                  <Image src={Projects} alt="no icons" />
                </div>
                <p className="text-neutral-900 text-[16px] md:text-[18px] font-semibold mt-3">Real Industry Projects</p>
                <p className=" text-center text-neutral-700 text-[16px] md:text-base font-normal leading-7">
                  (Work on Live Business)
                </p>
              </div>
            </div>
            <div className="max-[640px]:flex max-[640px]:justify-center text-center mt-[40px] px-[10px] sm:px-2 md:px-[30px] lg:px-[60px]">
              <div>
                <div className="flex justify-center">
                  <Image src={Projects} alt="no icons" />
                </div>
                <p className="text-neutral-900 text-[16px] md:text-[18px] font-semibold mt-3">Real Industry Projects</p>
                <p className=" text-center text-neutral-700 text-[16px] md:text-base font-normal leading-7">
                  (Work on Live Business)
                </p>
              </div>
            </div>
            <div className="max-[640px]:flex max-[640px]:justify-center text-center mt-[40px] px-[10px] sm:px-2 md:px-[30px] lg:px-[60px]">
              <div>
                <div className="flex justify-center">
                  <Image src={Projects} alt="no icons" />
                </div>
                <p className="text-neutral-900 text-[16px] md:text-[18px] font-semibold mt-3">Real Industry Projects</p>
                <p className=" text-center text-neutral-700 text-[16px] md:text-base font-normal leading-7">
                  (Work on Live Business)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mt-[50px] md:mt-[80px] mb-[70px]">

        <div className="container bg-[#F6F6F6] rounded-xl min-[1440px]:max-w-[1440px] mx-auto px-8 py-10">
          <p className="text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">Explore Digital Marketing
            <br />Courses with AI</p>
          <div className="grid min-[600px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-4 gap-5">


            <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className='bg-[#B2E1FE]'>
                <Image className="rounded-t-lg" src={Course} alt="no-course" />

              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Professional Certification Program in Digital Marketing & Analytics</h5>

                <div className='flex gap-2 items-center'>
                  <div className='px-2 py-2 flex items-center justify-center bg-black rounded-[100%]'>
                    <Image className='w-[20px]' src={Calender} alt='no-calender' />
                  </div>
                  <span className='text-[18px]'>
                    3 Months   |   Weekdays & Weekends
                  </span>

                </div>
                <ul className="list-disc pl-8">
                  <li className="marker:text-2xl">7 Courses in 1 program</li>
                  <li className="marker:text-2xl">20+ Tools with AI and 15+ live Projects</li>
                  <li className="marker:text-2xl">12+ Certifications</li>
                </ul>

                <div className='text-end'>
                  <button type="button" className="mt-5 text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-medium rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2">Apply NOW</button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className='bg-[#B2E1FE]'>
                <Image className="rounded-t-lg" src={Course} alt="no-course" />

              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Professional Certification Program in Digital Marketing & Analytics</h5>

                <div className='flex gap-2 items-center'>
                  <div className='px-2 py-2 flex items-center justify-center bg-black rounded-[100%]'>
                    <Image className='w-[20px]' src={Calender} alt='no-calender' />
                  </div>
                  <span className='text-[18px]'>
                    3 Months   |   Weekdays & Weekends
                  </span>

                </div>
                <ul className="list-disc pl-8">
                  <li className="marker:text-2xl">7 Courses in 1 program</li>
                  <li className="marker:text-2xl">20+ Tools with AI and 15+ live Projects</li>
                  <li className="marker:text-2xl">12+ Certifications</li>
                </ul>

                <div className='text-end'>
                  <button type="button" className="mt-5 text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-medium rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2">Apply NOW</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="mt-[40px] mb-[100px]">
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 px-3">
            <div>
              <p className="font-bold text-[32px]">
                Your Dream Job, Our Mission<br /><strong className='bg-[#FBE7C1]'>One Career at a Time!</strong>
              </p>
              <div className="flex gap-4 mt-4">
                <div className="text-start mt-[40px] px-[10px]">
                  <div>
                    <div className="flex justify-start">
                      <Image src={Student} alt="no icons" />
                    </div>
                    <p className="text-neutral-900 text-[16px] md:text-[18px] font-semibold mt-3">10,000+</p>
                    <p className=" text-center text-neutral-700 text-[16px]">
                      Students Trained
                    </p>
                  </div>
                </div>
                <div className="text-start mt-[40px] px-[10px]">
                  <div>
                    <div className="flex justify-start">
                      <Image src={Trainer} alt="no icons" />
                    </div>
                    <p className="text-neutral-900 text-[16px] md:text-[18px] font-semibold mt-3">1:15</p>
                    <p className=" text-center text-neutral-700 text-[16px]">
                      Trainers: Student ratio
                    </p>
                  </div>
                </div>
                <div className="text-start mt-[40px] px-[10px]">
                  <div>
                    <div className="flex justify-start">
                      <Image src={Record} alt="no icons" />
                    </div>
                    <p className="text-neutral-900 text-[16px] md:text-[18px] font-semibold mt-3">97%</p>
                    <p className=" text-center text-neutral-700 text-[16px]">
                      Placement Success record
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="relative w-full flex items-end max-w-[80%] ml-auto">

              <Image src={Shoe} alt="Shoe" className="absolute right-0 top-0 h-full w-[50%]" />


              <div className="absolute bottom-0 left-25 p-4 text-black">
                <p className="text-xl font-bold"><strong className='text-[#FD8A55] font-bold text-[28px]'>Take a Step Now</strong>
                  <br />Let’s build it Together!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container min-[1440px]:max-w-[1440px] mx-auto px-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allCards.slice(0, visibleCards).map((card) => (
              <div key={card.id} className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image className="w-full" src={BlogImg} alt="no-course" />
                <span className='py-3 px-2 flex justify-between border-[#E2E2E2] border-b'>
                  <p className='font-semibold'>Mahima Kumari</p>
                  <Image src={Amazon} alt='no-amazon' />
                </span>

                <div className="p-5">
                  <p className='text-[16px] text-[#282E38]'>
                    Bluetick for their professionalism, quick response times, and ability to deliver on promises. Many have seen significant growth
                    Load more
                  </p>
                  <Link href={`/article/${card.id}`}>
                    <p className="mt-2 text-[blue] transition">
                      Load More
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          {visibleCards < allCards.length && (
            <button
              onClick={handleLoadMore}
              className="bg-[#EBF4FF] text-[blue] border border-[blue] px-16 py-3 rounded-lg transition"
            >
              Load More
            </button>
          )}
          {visibleCards > 3 && (
            <button
              onClick={handleLoadLess}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Load Less
            </button>
          )}
        </div>
      </section>



      <section className="mt-[50px] md:mt-[80px] mb-[70px]">

        <div className="container bg-[#F6F6F6] rounded-xl min-[1440px]:max-w-[1440px] mx-auto px-8 py-10">
          <p className="text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">Why Choose
            <br /><span className='text-[blue]'>BlueTick</span> Academy?</p>

          <TestimonialSlider />

        </div>
      </section>

      <section>
        <div className='container min-[1440px]:max-w-[1440px] mx-auto px-4'>
          <p className="text-center font-bold text-[18px] text-[#FE7C55]">
            GLOBAL PRESENCE
          </p>
          <p className="font-semibold text-[32px] text-center text-[#242424]">
            Learners from 30<span className='border-b-[4px] border-[#FE7C55]'>+ Countr</span>ies
          </p>
          <MapWithPoints />
        </div>
      </section>

      <section className="mt-[50px] md:mt-[80px] mb-[70px]">
        <div className='container min-[1440px]:max-w-[1440px] mx-auto px-4'>
          <p className='font-bold text-[32px]'>Digital Marketing Courses
            <br />in Bangalore - <span className='text-[#007BFC] font-[500]'>Everything you should know!</span></p>


          <Accordion />
        </div>
      </section>


      <section className="mt-[50px] md:mt-[80px]  mb-[70px]">
        <p className="text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">Media & Awards</p>
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
          <div className="grid min-[600px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-4 flex justify-center items-center">
            <div>
              <Image src={Logo1} alt='no-logos' />
            </div>
            <div>
              <Image src={Logo2} alt='no-logos' />
            </div>
            <div>
              <Image src={Logo3} alt='no-logos' />
            </div>
            <div>
              <Image src={Logo4} alt='no-logos' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home