
import Image from "next/image";
import { service } from "@/types/Service";
import snabbit from "../../public/images/Snabbit-logo.svg";

export default function ServiceCard({ label, title, description, image }: service) {
    return (
        <div className="flex flex-col px-6 lg:px-10 pt-10 lg:pt-16 pb-2 gap-6 bg-gradient-to-t from-white to-[#F5F7FA] border border-[#D4D4D4] rounded-[44px] shadow-sm" >
            <div className="flex flex-col">
                <Image src={snabbit} alt="snabbit" width={101} height={50} quality={100} />
                {label == "NOWW" ? (
                    <p className="text-[#3D2F82] text-2xl lg:text-[28px] font-semibold leading-none bg-gradient-to-r from-[#F7EB4D] to-[#FBB33D] rounded-r-full w-fit pl-2 pr-5 py-1">{label}</p>
                ) : (<p className="text-[#F70F79] text-[32px] lg:text-[40px] font-[900] leading-none">{label}</p>)}


            </div>
            <div className="flex flex-col gap-6 w-[364px]">
                <p className="text-black text-[36px] lg:text-[40px] font-semibold leading-tight w-[80%] tracking-tight">{title}</p>
                <p className="text-[#5E697F] text-[18px] lg:text-[20px] leading-tight">{description}</p>
            </div>
            <div className="flex justify-center items-center gap-4 lg:w-[364px] lg:h-[280px] bg-white rounded-2xl">
                <div className="rounded-3xl">
                    <Image
                        src={image}
                        alt={title}
                        width={240}
                        height={230}
                        quality={100}
                        loading="lazy"
                        className="rounded-3xl object-cover " />
                </div>
            </div>
        </div>
    )
}