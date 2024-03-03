import React from "react";
import cover from "@/assets/images/bg-curve-desktop.svg";
import Image from "next/image";
import crewImg from "@/assets/images/illustration-2.svg";
import { FeactureContent } from "@/components";
const Teams = () => {
  return (
    <section className="w-full pt-[5%]">
      <div>
        {" "}
        <Image
          src={cover}
          alt="caver"
          width={0}
          height={0}
          className="w-full"
        />
      </div>
      <div className="w-full h-full bg-grayishBlue grid co grid-cols-1 sm:grid-cols-2 px-[10%] py-[5%]">
        <FeactureContent />
        <div className="order-first sm:order-none ">
          <Image src={crewImg} alt="" width={0} height={0} />
        </div>
      </div>
    </section>
  );
};

export default Teams;
