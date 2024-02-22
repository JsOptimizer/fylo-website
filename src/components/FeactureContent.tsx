import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "@/assets/images/avatar-testimonial.jpg";

const FeactureContent = () => {
  return (
    <section className="space-y-8 p-">
      <div>
        <p className="raleway text-5xl text-primary">
          Stay productive, wherever you are
        </p>
      </div>
      <div className="space-y-4 text-xl">
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          <br />
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for
          <br /> live collaboration. No email attachments required!
        </p>
        <p className="text-moderateCyan underline">
          <Link className="" href={""}>
            {" "}
            See how Fylo works
          </Link>
        </p>
      </div>
      <div className="flex">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
          <p>
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
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold"> Kyle Burton</h4>
              <p> Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeactureContent;
