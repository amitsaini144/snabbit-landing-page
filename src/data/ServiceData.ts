import { service } from "@/types/Service";
import rocket from "../../public/images/NOWW Icon 1.svg";
import clock from "../../public/images/NOWW Icon 2.svg";
import calender from "../../public/images/NOWW Icon 3.svg";
import days from "../../public/images/NOWW Icon 4.svg";


export const services: service[] = [
    {
        id: 1,
        slug: 'the-future-of-wearable-tech-trends',
        label: 'NOWW',
        title: 'Need help in 15 Mins?',
        description: 'If your home help ditches last minutes',
        href: '',
        image: rocket,
    },
    {
        id: 2,
        slug: 'the-future-of-wearable-tech-trends',
        label: 'READY',
        title: 'Schedule for later?',
        description: "If your home help isn't coming today",
        href: '',
        image: clock,

    },
    {
        id: 3,
        slug: 'the-future-of-wearable-tech-trends',
        label: 'WEEKLY',
        title: 'Deep cleaning once a week',
        description: "Weekly offer ability to book weekly",
        href: '',
        image: calender,
    },
    {
        id: 4,
        slug: 'the-future-of-wearable-tech-trends',
        label: 'DAILY',
        title: 'Help for longer duration?',
        description: "Snabbit Daily for everyday service",
        href: '',
        image: days,
    },

]
