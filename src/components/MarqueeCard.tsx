import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Card({
    img,
    title,
}: {
    img: string;
    title: string;
}) {
    return (
        <figure
            className={cn(
                "relative flex flex-col h-40 md:h-44 md:w-36 cursor-pointer overflow-hidden rounded-[32px] border-4 shadow-xl border-[#E6E8F0] bg-white hover:bg-gray-950/[.05]"
            )}
        >
            <div className="flex flex-row items-center justify-center gap-2 h-[65%]">
                <Image className="rounded-full" width="100" height="32" alt="" src={img} />
            </div>
            <div className="flex justify-center items-center text-xs md:text-sm bg-slate-100 text-center h-[35%]">
                <p className="px-1">{title}</p>
            </div>
        </figure>
    );
};
