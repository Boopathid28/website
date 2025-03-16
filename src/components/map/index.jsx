"use client";

import { useEffect } from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Default Tippy.js styling
import "tippy.js/themes/light.css"; // Light theme
import WorldMap from "@/assets/img/worldmap.png"; // Replace with your actual image path
import India from "@/assets/img/india.webp"; // Replace with your actual image path

const locations = [
    { name: "Venezuela", top: "54%", left: "24%", country: India },
    { name: "Brazil", top: "64%", left: "28%", country: India },
    { name: "Argentina", top: "77%", left: "27%", country: India },
    { name: "Colombia", top: "55%", left: "21%", country: India },
    { name: "Panama", top: "51%", left: "18%", country: India },
    { name: "Mexico", top: "38%", left: "12%", country: India },
    { name: "USA", top: "26%", left: "17%", country: India },
    { name: "Saudi Arabia", top: "40%", left: "53%", country: India },
    { name: "Turkey", top: "31%", left: "57%", country: India },
    { name: "Russia", top: "16%", left: "67%", country: India },
    { name: "China", top: "40%", left: "72%", country: India },
    { name: "Japan", top: "34%", left: "86%", country: India },
    { name: "Australia", top: "72%", left: "86%", country: India },
];

export default function MapWithPoints() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Map Image */}
            <div className="relative w-full max-w-4xl">
                <Image src={WorldMap} alt="World Map" className="w-full h-auto" />

                {/* Location Points */}
                {locations.map((location, index) => (
                    <Tippy
                        key={index}
                        content={
                            <div className="p-2 text-center">
                                <Image
                                    src={location.country}
                                    alt={location.name}
                                    width={100}
                                    height={60}
                                    className="rounded-lg"
                                />
                                <p className="mt-2 text-sm font-semibold">{location.name}</p>
                            </div>
                        }
                        theme="light"
                        arrow={true}
                    >
                        <div
                            className="absolute w-4 h-4 bg-black rounded-full shadow-md cursor-pointer animate-pulse hover:scale-125 transition-transform overflow-hidden"
                            style={{ top: location.top, left: location.left }}
                        >
                            <Image
                                src={location.country}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                    </Tippy>
                ))}
            </div>
        </div>
    );
}
