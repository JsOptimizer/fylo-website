import { useSendMail } from "@/hook";
import React from "react";

const Singup = () => {
  const {errors,handleSubmit,onSubmit,register}=useSendMail()
  const emailErrorMessage =errors.email?.message
  console.log(emailErrorMessage)
  return (
    <section className="bg-secondary px-[10%] py-[5%] text-white gap-4 grid grid-cols-1 sm:grid-cols-2">
      <div className="space-y-4">
        <p className="raleway text-center sm:text-left sm:text-4xl"> Get early access today</p>
        <p className="sm:text-xl sm:text-left text-center">
          It only takes a minute to sign up and our free starter tier is
          <br />
          extremely generous. If you have any questions, our support team
          <br /> would be happy to help you.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-2 sm:space-y-4">
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
          <button type="submit" className="w-full sm:w-auto bg-brighBlue p-2 rounded font-bold"> Get Started For Free</button>
        </div>
      </form>
    </section>
  );
};

export default Singup;
