import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { listContact, listContactIcon, listContactWithIcon } from "@/constant";

const Footer = () => {
  return (
    <section className="px-[10%] py-[5%] bg-primary text-white space-y-8">
      <div className="">
        <Image className="" src={logo} alt="logo" width={100} height={100} />
      </div>
      <section className="grid  gap-8 md:grid-cols-4">
        <ul className="space-y-4">
          {listContactWithIcon.map(({ label,logo }, idx) => (
            <li key={idx} className="flex gap-2 items-center">
              <Image src={logo} alt="label" width={0} height={0} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
        {listContact.map(({lists}, key) => (
          <ul key={key} className="space-y-4">
            {lists.map((label, idx) => (
              <li key={idx}>{label}</li>
            ))}
          </ul>
        ))}
        <ul className="flex gap-4 justify-center md:justify-start">
          {listContactIcon.map((Icon,idx)=>(
            <li key={idx}>
              <Icon/>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Footer;
