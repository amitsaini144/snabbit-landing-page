import hero from "../../public/images/hero.svg"
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="w-full px-6 lg:px-24 pt-36 lg:pt-24">

            <div className="flex flex-col lg:flex-row items-center text-black">
                <div className="flex flex-col lg:w-[60%] gap-6">
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
                <div >
                    <Image src={hero} alt="hero" quality={100} />
                </div>
            </div>
        </section>
    )
}