import { Faq } from "@/data/FaqData";
import FaqItem from "./FaqItem";

export default function FaqSection() {
    return (
        <div className="w-full px-6 md:px-10 pt-12 pb-16 bg-[#F5F8FD] max-w-[1423px] mx-auto">
            <div className="flex lg:px-24 gap-12 justify-center">

                <div className="flex flex-col justify-center items-center w-full gap-4">
                    <h2 className="text-[30px] text-black font-semibold">FAQs</h2>
                    <div className="flex flex-col gap-1 w-full">
                        {Faq.map((faq) => (
                            <FaqItem
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}