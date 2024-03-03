import Image from "next/image";
import React from "react";
import featureImg from "@/assets/images/illustration-1.svg";
import { useSendMail } from "@/hook";
const Hero = () => {
  const { errors, handleSubmit, onSubmit, register } = useSendMail();
  const emailErrorMessage = errors.email?.message;
  console.log(emailErrorMessage);
  return (
    <section className="px-[10%] py-[5%] h-full grid md:grid-cols-2  items-center ">
      <div className="space-y-4">
        <p className="raleway text-center text-2xl sm:text-left sm:text-5xl text-primary">
          All your files in one secure
          <br /> location, accessible anywhere.
        </p>
        <p className="text-primary font-light text-sm sm:text-base  text-center sm:text-left">
          Fylo stores your most important files in one secure location. Access
          <br />
          them wherever you need, share and collaborate with friends, family,
          <br />
          and co-workers.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <div className="space-y-1">
          <input
          {...register("email")}
            type="text"
            className={`${emailErrorMessage&&'border-red-500'} w-full p-2 text-black outline-none border-2`}
            placeholder="Enter your email"
          />
          {<p className={`${emailErrorMessage?"visible":"invisible"}`}>{emailErrorMessage}</p>}
        </div>
        <div className="">
          <button type="submit" className="w-full sm:w-auto bg-brighBlue p-2 rounded font-bold text-white"> Get Started For Free</button>
        </div>
      </form>
      </div>
      <div className="">
        <Image src={featureImg} alt="feature" width={0} height={0} />
      </div>
    </section>
  );
};

export default Hero;
