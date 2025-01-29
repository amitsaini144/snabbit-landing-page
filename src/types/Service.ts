import { StaticImageData } from "next/image";

export interface service {
    id: number;
    slug: string;
    label: string;
    title: string;
    description: string;
    href: string;
    image: StaticImageData;
};
