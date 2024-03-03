import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "@/assets/images/avatar-testimonial.jpg";
import arrowtIcon from '@/assets/images/icon-arrow.svg'
import quotesIcon from '@/assets/images/icon-quotes.svg'

const FeactureContent = () => {
  return (
    <section className=" space-y-4 sm:space-y-8 py-10">
      <div>
        <p className="raleway sm:text-5xl text-primary">
          Stay productive, wherever you are
        </p>
      </div>
      <div className="space-y-4 text-sm sm:text-xl">
        <p className="text-sm sm:text-base">
          Never let location be an issue when accessing your files. Fylo has you
          <br />
          covered for all of your file storage needs.
        </p>
        <p className="text-sm sm:text-base">
          Securely share files and folders with friends, family and colleagues
          for
          <br /> live collaboration. No email attachments required!
        </p>
        
         <div className="flex">
         <Link className="text-moderateCyan flex gap-1 sm:text-left border-b-2 border-b-moderateCyan justify-center sm:justify-start " href={""}>
            {" "}
            <span>See how Fylo works</span>
            <Image src={arrowtIcon} alt="" width={30} height={0}/>
          </Link>
         </div>
        
      </div>
      <div className="flex">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
          <p className="text-xs sm:text-sm ">
          <Image src={quotesIcon} alt="" width={20} height={0}/>
            Fylo has improved our team productivity by
            <br /> an order of magnitude. Since making the
            <br /> switch our team has become a well-oiled
            <br />
            collaboration machine.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={avatar}
              alt="call"
              width={0}
              height={0}
              className="rounded-full w-6 h-6 sm:w-10 sm:h-10"
            />
            <div>
              <h4 className=" text-xs sm:text-sm font-bold"> Kyle Burton</h4>
              <p className="text-xs sm:text-sm "> Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeactureContent;
