import snabbit from "../../public/images/Snabbit-logo.svg";
import x from "../../public/images/x.svg";
import facebook from "../../public/images/facebook.svg";
import instagram from "../../public/images/instagram.svg";
import Image from "next/image";

export default function ContactSection() {
    return (
        <div className="flex flex-col w-full px-6 md:px-10 pt-16 pb-36 gap-16 max-w-[1423px] mx-auto">
            <div className="flex flex-col md:flex-row lg:px-24 justify-between">

                <div className="flex flex-col justify-center md:w-[40%] gap-8">
                    <Image src={snabbit} alt="snabbit" quality={100} width={280} />
                </div>

                <div className="flex md:justify-between gap-20 lg:gap-32">
                    <div className="flex flex-col gap-4 md:justify-between">
                        <p className="text-[#101840]">Terms of Use</p>
                        <p className="text-[#101840]">Refund &<br /> Cancellation Policy</p>
                    </div>
                    <p className="text-[#101840]">Privacy Policy</p>
                </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row lg:px-24 justify-between">
                <p className="text-black"><span className="font-semibold">Maestroedge Solutions Private Limited</span>  @2024 - All right reserved</p>
                <div className="flex gap-8">
                    <Image src={instagram} alt="instagram" quality={100} width={20} height={20} />
                    <Image src={facebook} alt="facebook" quality={100} width={20} height={20} />
                    <Image src={x} alt="x" quality={100} width={20} height={20} />
                </div>
            </div>
        </div>
    )
}