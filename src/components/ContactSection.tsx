
export default function ContactSection() {
    return (
        <div className="w-full px-6 md:px-10 pt-16 pb-24 max-w-[1423px] mx-auto">
            <div className="flex flex-col md:flex-row lg:px-24 gap-12">

                <div className="flex flex-col  justify-center md:w-[40%] gap-4 md:gap-8">
                    <h2 className="text-[42px] lg:text-[48px] text-black font-bold">Write to us</h2>
                    <p className="text-xl lg:text-2xl text-[#101840] leading-relaxed">If you have a complaint, suggestion, or are excited to be a part of our dynamic team, we&apos;d love to hear from you!</p>
                </div>

                <div className="flex flex-col gap-4 md:w-[60%] ">
                    <input type="text" placeholder="Name" className="border rounded-lg py-3 px-6 text-black focus:outline-none" />
                    <input type="text" placeholder="Email" className="border rounded-lg py-3 px-6 text-black focus:outline-none" />
                    <textarea placeholder="Describe your feedback" className="border rounded-lg py-3 px-6 text-black resize-none h-48 focus:outline-none" />
                    <button className="bg-[#F70F79] rounded-lg py-2 text-white"> Submit</button>
                </div>
            </div>
        </div>
    )
}