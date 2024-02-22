import Image from "next/image";
import React from "react";
import featureImg from "@/assets/images/illustration-1.svg";
const Hero = () => {
  return (
    <section className=" h-full grid md:grid-cols-2  items-center">
      <div className="space-y-4">
        <p className="raleway text-5xl text-primary">
          All your files in one secure<br/> location, accessible anywhere.
        </p>
        <p className="text-primary font-light text-2xl">
          Fylo stores your most important files in one secure location. Access<br/>
          them wherever you need, share and collaborate with friends, family,<br/>
          and co-workers.
        </p>
        <div className="space-x-4">
          <input placeholder="Enter your email..." className="border-2 rounded p-3 "/>
          <button className="bg-brighBlue text-white py-3 rounded px-10 ">Get Started</button>
        </div>
      </div>
      <div className="">
        <Image src={featureImg} alt="feature" width={0} height={0} />
      </div>
    </section>
  );
};

export default Hero;
