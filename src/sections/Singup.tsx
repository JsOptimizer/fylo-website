import { useSendMail } from "@/hook";
import React from "react";

const Singup = () => {
  const {errors,handleSubmit,onSubmit,register}=useSendMail()
  const emailErrorMessage =errors.email?.message
  return (
    <section className="bg-secondary px-[10%] py-[5%] text-white grid grid-cols-2">
      <div className="space-y-4">
        <p className="raleway text-4xl"> Get early access today</p>
        <p className="text-xl">
          It only takes a minute to sign up and our free starter tier is
          <br />
          extremely generous. If you have any questions, our support team
          <br /> would be happy to help you.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
          {...register("email")}
            type="text"
            className="w-full p-4  "
            placeholder="Enter your email"
          />
          {<p className={`${emailErrorMessage && "visible"} invisible`}>Please check your email</p>}
        </div>
        <div className="grid grid-cols-2">
          <button type="submit" className="bg-brighBlue py-4 font-bold"> Get Started For Free</button>
        </div>
      </form>
    </section>
  );
};

export default Singup;
