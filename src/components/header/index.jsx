"use client";
import Image from "next/image";
import Logo from "../../assets/img/logo.svg";
import Whatapp from "../../assets/img/whatapp.svg";
import Phone from "../../assets/img/phoneicon.svg";
import Link from "next/link";
import {
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function Header() {
    const [menuState, setMenuState] = useState(null);
    const [activeService, setActiveService] = useState(0);
    const [activeService2, setActiveService2] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);


    function myfunction() {
        setMenuOpen(false);
        setMenuState(null);
        if (menuState === 3) {
            setMenuState(null)
            setActiveService2(null)
        }
        else {
            setMenuState(3)
        }
    }
    // scroll navbar-start
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        <>
            <div className={`${color ? "bg-[#101445]" : "bg-[#101445]"} z-[5] sticky top-0`}>
                <div className=" w-full h-[80px] flex justify-between items-center min-[1280px]:container min-[1440px]:max-w-[1440px] mx-auto px-6">
                    <div onClick={() => setMenuOpen(false)} className="w-[100px] min-[500px]:w-[130px]">
                        <Link href="/">
                            <Image src={Logo} layout="responsive" alt="no-image" />
                        </Link>
                    </div>

                    <div className="flex gap-[10px] min-[1050px]:gap-[0px] items-center">
                        <div
                            className={`${menuOpen === true ? "max-[1049px]:translate-x-0 " : "max-[1049px]:translate-x-full"
                                } min-[1050px]:flex fixed top-[80px] left-0 z-[5] max-[500px]:p-[15px] max-[1049px]:p-[35px] min-[1050px]:static bg-white min-[1050px]:bg-transparent max-[1049px]:ease-in-out max-[1049px]:duration-300 h-full max-[1049px]:w-full flex flex-col min-[1050px]:flex-row gap-[15px] min-[1050px]:gap-[40px] min-[1050px]:items-center font-[400] text-[18px] text-black min-[1050px]:text-white capitalize max-[1024px]:overflow-y-scroll`}
                        >

                            <Link href="/">
                                <div onClick={() => setMenuOpen(!menuOpen)} className="py-[10px] min-[1050px]:py-0 min-[1050px]:px-0">
                                    <p className="text-[18px] font-[400] capitalize">Our Courses</p>
                                </div>
                            </Link>

                            <div
                                onMouseEnter={() => setMenuState(1)}
                                onClick={() => {
                                    if (menuState === 1) {
                                        setMenuState(null);
                                    } else {
                                        setMenuState(1)
                                    }
                                }}
                                onMouseLeave={() => setMenuState(null)}
                                className="relative cursor-pointer py-[10px] min-[1050px]:py-0 min-[1050px]:px-0"
                            >
                                <div
                                    onClick={() => {
                                        if (menuState === null) {
                                            setMenuState(1);
                                        } else {
                                            setMenuState(null);
                                        }
                                    }}
                                    className="flex gap-[10px]"
                                >
                                    <p className="text-[18px] font-[400] capitalize">Hire from us</p>
                                </div>
                            </div>

                            <div
                                onMouseEnter={() => setMenuState(3)}
                                onMouseLeave={() => {
                                    setMenuState(null);
                                    setActiveService(0);
                                }}
                                className="relative cursor-pointer py-[10px] min-[1050px]:py-0 min-[1050px]:px-0 mr-2"
                            >
                                <div
                                    onClick={() => {
                                        if (menuState === 3) {
                                            setMenuState(null);
                                            setActiveService2(null);
                                        } else {
                                            setMenuState(3);
                                            setActiveService(0);
                                        }
                                    }}
                                    className="flex gap-[10px]"
                                >
                                    <p className="text-[18px] font-[400] capitalize">Franchisee Enquiry</p>
                                </div>
                            </div>


                        </div>

                        <div className="mr-2 md:block hidden">
                            <Link onClick={() => setMenuOpen(!menuOpen)} href="/contact">
                                <div className="outline-none bg-[#2D2E5A] py-2 px-3 capitalize rounded-full font-[600] text-[15px] text-[#303E6C] flex items-center gap-1">
                                    <div className="w-[30px] h-[30px]">
                                        <Image src={Whatapp} layout="responsive" alt="no-image" />
                                    </div>
                                    <p className="text-white">+91-9606 9955 25</p>
                                </div>
                            </Link>
                        </div>
                        <div className="md:block hidden">
                            <Link onClick={() => setMenuOpen(!menuOpen)} href="/contact">
                                <div className="outline-none bg-[#2D2E5A] py-2 px-3 capitalize rounded-full font-[600] text-[15px] text-[#303E6C] flex items-center gap-1">
                                    <div className="w-[30px] h-[30px]">
                                        <Image src={Phone} layout="responsive" alt="no-image" />
                                    </div>
                                    <p className="text-white">+91-9606 9955 25</p>
                                </div>
                            </Link>
                        </div>

                        <div className="mr-2">
                            <Link onClick={() => setMenuOpen(!menuOpen)} href="/contact">
                                <div className="w-[30px] h-[30px] md:hidden block">
                                    <Image src={Whatapp} layout="responsive" alt="no-image" />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link onClick={() => setMenuOpen(!menuOpen)} href="/contact">
                                <div className="w-[30px] h-[30px] md:hidden block">
                                    <Image src={Phone} layout="responsive" alt="no-image" />
                                </div>
                            </Link>
                        </div>

                        <div
                            onClick={() => {
                                if (menuOpen === false) {
                                    setMenuOpen(true);
                                } else {
                                    setMenuOpen(false);
                                }
                            }}
                        >
                            <div
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="block min-[1050px]:hidden"
                            >
                                {menuOpen ? (
                                    <XMarkIcon className="text-white w-[30px] h-[30px]" />
                                ) : (
                                    <Bars3Icon className="text-white w-[30px] h-[30px]" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
