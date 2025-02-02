import { marqueeCard } from "@/types/Marquee";
import mopping from "../../public/images/mopping.svg";
import brooming from "../../public/images/brooming.svg";
import machine from "../../public/images/clothes-machine-wash.svg";
import utensil from "../../public/images/utensil-cleaning.svg";
import kitchen from "../../public/images/kitchen-cleaning.svg";
import bathroom from "../../public/images/bathroom-cleaning.svg";
import dusting from "../../public/images/dusting.svg";

export const marqueeData: marqueeCard[] = [
    {
        id: 1,
        title: "MOPPING",
        img: mopping,
    },
    {
        id: 2,
        title: "CLOTHES MACHINE WASH",
        img: machine,
    },
    {
        id: 3,
        title: "BROOMING",
        img: brooming,
    },
    {
        id: 4,
        title: "KITCHEN CLEANING",
        img: kitchen,
    }, 
    {
        id: 5,
        title: "BATHROOM CLEANING",
        img: bathroom,
    },
    {
        id: 6,
        title: "UTENSIL CLEANING",
        img: utensil,
    },
    {
        id: 7,
        title: "DUSTING",
        img: dusting,
    }
];