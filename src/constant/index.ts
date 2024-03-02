import phone from "@/assets/images/icon-phone.svg";
import email from "@/assets/images/icon-email.svg"
import {IoLogoFacebook,IoLogoTwitter,IoLogoInstagram} from "react-icons/io5"
import { IconType } from "react-icons";
export const listContactWithIcon:{logo:string,label:string}[] = [
  {
    logo: phone,
    label: "Phone: +1-543-123-4567",
  },
  {
    logo: email,
    label: "example@fylo.com",
  },
];

export const listContact:{lists:string[]}[]=[
    {
        lists:["About Us","Jobs","Press","Blog"]
    },
    {
        lists:["Contact Us","Terms","Privacy"]
    }
]
export const listContactIcon: IconType[]=[IoLogoFacebook,IoLogoTwitter,IoLogoInstagram]