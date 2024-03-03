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
        <p className="raleway text-center text-2xl sm:text-5xl text-primary">
          All your files in one secure
          <br /> location, accessible anywhere.
        </p>
        <p className="text-primary font-light text-sm text-center sm:text-2xl">
          Fylo stores your most important files in one secure location. Access
          <br />
          them wherever you need, share and collaborate with friends, family,
          <br />
          and co-workers.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="sm:flex gap-4">
          <div className="w-full sm:w-auto space-x-4">
            <input
              {...register("email")}
              type="text"
              className={`${
                emailErrorMessage && "border-red-500"
              }  w-full sm:w-auto border-2 rounded p-2 outline-none`}
              placeholder="Enter your email"
            />
          {
            <p className={`${emailErrorMessage ? "visible" : "invisible"}`}>
              {emailErrorMessage}
            </p>
          }
          </div>
          <button
              type="submit"
              className="w-full sm:w-auto bg-brighBlue text-white py-2 rounded px-10 "
            >
              Get Started
            </button>
        </form>
      </div>
      <div className="">
        <Image src={featureImg} alt="feature" width={0} height={0} />
      </div>
    </section>
  );
};

export default Hero;
