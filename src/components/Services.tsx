"use client";

import { services } from "@/data/ServiceData";
import ServiceCard from "./ServiceCard";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Services() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        if (carouselRef.current) {
            const scrollAmount = 460; 
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full px-2 lg:px-10 pt-16 pb-24 bg-gradient-to-t from-[#F4F7FC] via-[#F4F7FC] to-white">
            <div className="flex flex-col gap-10 justify-center">
                <div className="flex md:flex-row flex-col text-black justify-center items-center gap-y-6">
                    <h2 className="text-[42px] lg:text-[48px] font-semibold">Our services</h2>
                </div>

                <div className="relative">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-white h-fit p-3 rounded-full border absolute top-1/2 left-0 z-10" >
                        <MoveLeft className="w-6 h-6 lg:w-10 lg:h-10 text-[#B7B7B7]" />
                    </button>

                    <motion.div
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto justify-around scrollbar-hide relative pl-16 lg:pl-24 pr-24">
                        {services.map((service) => (
                            <div className="flex-shrink-0" key={service.id}>
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </motion.div>

                    <button
                        onClick={() => scroll("right")}
                        className="bg-white h-fit p-3 rounded-full border absolute top-1/2 right-0 z-10" >
                        <MoveRight className="w-6 h-6 lg:w-10 lg:h-10 text-[#B7B7B7]" />
                    </button>
                </div>

            </div>
        </div>
    )
}