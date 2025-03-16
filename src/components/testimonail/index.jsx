"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Testimonial from "@/assets/img/testimonial.png";

const testimonials = [
    { name: "John Doe", text: "I had a fantastic experience!", image: Testimonial },
    { name: "Jane Smith", text: "I had a fantastic experience!", image: Testimonial },
    { name: "Alice Brown", text: "Excellent customer support!", image: Testimonial },
    { name: "David Lee", text: "Great quality and value!", image: Testimonial },
    { name: "John Doe", text: "I had a fantastic experience!", image: Testimonial },
    { name: "Jane Smith", text: "I had a fantastic experience!", image: Testimonial },
    { name: "Alice Brown", text: "Excellent customer support!", image: Testimonial },
    { name: "David Lee", text: "Great quality and value!", image: Testimonial },
];

export default function TestimonialSlider() {
    return (
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-6 mt-5">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 3000 }}
                className="rounded-lg"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="rounded-lg">
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
                            <div>
                                <Image
                                    className="w-full"
                                    src={testimonial.image}
                                    alt="testimonial"
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <div className="p-5 flex-grow flex flex-col">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {testimonial.name}
                                </h5>
                                <ul className="list-disc pl-8 flex-grow">
                                    <li className="marker:text-2xl">{testimonial.text}</li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
