
export default function RecordSection() {
    return (
        <div className="w-full px-6 md:px-10 pt-20 pb-32 bg-[#F70F79]">
            <div className="flex flex-col justify-between lg:px-24 gap-20 md:gap-24">

                <div className="flex flex-col justify-center items-center gap-y-6">
                    <h2 className="text-[38px] lg:text-[42px] font-medium text-white text-center leading-tight">We are on a mission to revolutionize<br className="hidden lg:block" /> the way in which households function</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:justify-around">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[70px] lg:text-[80px] font-bold tracking-tighter leading-tight">2.5 k+</h2>
                        <p className="text-xl lg:text-2xl text-white/60">Active Users</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h2 className="text-[70px] lg:text-[80px] font-bold tracking-tighter leading-tight">12 k+</h2>
                        <p className="text-xl lg:text-2xl w-[80%] text-center text-white/60">Hours of Service Provided</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h2 className="text-[70px] lg:text-[80px] font-bold tracking-tighter leading-tight">4.5
                            <span className="text-[40px] tracking-normal">/5</span></h2>
                        <p className="text-xl lg:text-2xl text-white/60">Average Rating</p>
                    </div>

                </div>
            </div>
        </div>
    )
}