import { Marquee } from "./ui/marquee";
import ReviewCard from "./Marquee";
import { marqueeData } from "@/data/MarqueeData";

const secondRow = marqueeData.reverse(); 
const shuffledData = [...marqueeData].sort(() => Math.random() - 0.5);

export default function HeroSection() {
    return (
        <section className="w-full px-6 lg:px-24 pt-36 lg:pt-28 max-w-[1423px] mx-auto">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-y-16 text-black">
                <div className="flex flex-col lg:w-[50%] gap-6">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[50px] lg:text-[60px] font-bold leading-none">
                            Home help in<br className="md:hidden lg:block" />
                            <span className="text-[#F70F79]"> 15 minutes</span>
                        </h1>
                        <p className="text-[32px] lg:text-[38px]">
                            Trained experts at your doorstep
                        </p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <input type="text" placeholder="Enter your moblie number" className="border rounded-lg py-3 px-6 w-[70%] bg-[#F7F7F7] focus:outline-none" />
                        <button className="rounded-lg bg-[#F70F79] w-[30%] py-3 px-4 text-white">
                            Book now
                        </button>
                    </div>
                </div>
                <div className="relative flex h-[400px] flex-row items-center justify-end overflow-hidden lg:w-[50%]">
                    <Marquee pauseOnHover vertical className="[--duration:30s]">
                        {marqueeData.map((service) => (
                            <ReviewCard key={service.id} {...service} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover vertical className="[--duration:34s]">
                        {secondRow.map((service) => (
                            <ReviewCard key={service.id} {...service} />
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover vertical className="[--duration:30s]">
                        {shuffledData.map((service) => (
                            <ReviewCard key={service.id} {...service} />
                        ))}
                    </Marquee>
                    
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
                </div>
            </div>
        </section>
    )
}