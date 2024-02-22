import React from "react";

const Singup = () => {
  return (
    <section className="bg-secondary p-[5%] text-white grid grid-cols-2">
      <div className="space-y-4">
        <p className="raleway text-4xl"> Get early access today</p>
        <p className="text-xl">
          It only takes a minute to sign up and our free starter tier is
          <br />
          extremely generous. If you have any questions, our support team
          <br /> would be happy to help you.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            className="w-full p-4  "
            placeholder="Enter your email"
          />
          {<p>Please check your email</p>}
        </div>
        <div className="grid grid-cols-2">
          <button className="bg-brighBlue py-4 font-bold"> Get Started For Free</button>
        </div>
      </div>
    </section>
  );
};

export default Singup;
