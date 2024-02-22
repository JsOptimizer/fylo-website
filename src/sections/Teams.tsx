import React from "react";
import cover from "@/assets/images/bg-curve-desktop.svg";
import Image from "next/image"
import crewImg from '@/assets/images/illustration-2.svg'
import { FeactureContent } from "@/components";
const Teams = () => {
  return <section className="w-full">
    <Image
    src={cover}
    alt="caver"
    width={0}
    height={0}
    className="w-full"
    />
    <div className="w-full h-full bg-grayishBlue grid grid-cols-2 p-[5%]">
      <FeactureContent/>
      <div>
        <Image
        src={crewImg}
        alt=""
        width={0}
        height={0}
        />
      </div>
    </div>
  </section>;
};

export default Teams;
