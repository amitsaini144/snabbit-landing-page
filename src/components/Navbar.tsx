
import snabbit from "../../public/images/Snabbit-logo.svg"
import apple from "../../public/images/apple.svg"
import playstore from "../../public/images/playstore.svg"
import Image from "next/image";

export default function Navbar() {

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 w-full bg-white">
            <div className="flex w-full justify-between max-w-[1230px]">
                    <div className="flex items-center w-[100px] md:w-[138px]">
                        <Image src={snabbit} alt="snabbit" quality={100} />
                    </div>
                    <div className="items-center gap-2 md:gap-6 flex">
                        <button className="items-center text-xs md:text-sm text-white bg-black px-2.5 md:px-6 py-2 md:py-3 rounded-full flex gap-1.5">
                            <Image src={apple} alt="apple" quality={100} className="w-4 h-4 md:w-5 md:h-5" />
                            App Store</button>
                        <button className="items-center text-xs md:text-sm text-white bg-black px-2.5 md:px-6 py-2 md:py-3 rounded-full flex gap-1.5">
                            <Image src={playstore} alt="playstore" quality={100} className="w-4 h-4 md:w-5 md:h-5"/>
                            Play Store</button>
                    </div>
                </div>
        </nav>
    );
}