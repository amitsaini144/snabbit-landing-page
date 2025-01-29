import iphone from "../../public/images/iphone15pro.svg"
import Image from "next/image"
import google from "../../public/images/google-play.svg"
import appStore from "../../public/images/app-store.svg"

export default function DownloadSection() {
    return (
        <div className="w-full px-6 md:px-10 pt-16 bg-white">
            <div className="flex flex-col lg:flex-row justify-between lg:px-24">
                <div className="flex flex-col text-black gap-y-4 md:gap-y-6">
                    <h2 className="text-[42px] lg:text-[48px] font-semibold tracking-tighter leading-tight">Download Snabbit now!</h2>
                    <p className="text-[22px] lg:text-[28px]">Get 60 mins of service for just <span className="text-[#525871] line-through">₹199</span> ₹99.<br className="md:hidden lg:block" />
                        50% off up to ₹100 on your first 3 orders!</p>
                    <div className="flex gap-x-6 justify-center lg:justify-start">
                        <Image src={google} alt="google play" quality={100} width={150} height={50} />
                        <Image src={appStore} alt="app store" quality={100} width={150} height={50} />
                    </div>
                </div>

                <div className="flex justify-center">
                    <Image src={iphone} alt="iphone" quality={100} width={300} height={400} />
                </div>
            </div>
        </div>
    )
}