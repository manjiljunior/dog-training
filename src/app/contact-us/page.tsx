import React from "react";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Component from "./Component";
import { Button } from "@/components/ui/button";
import { getContactpage } from "@/lib/datalayer";

const ContactUs = async () => {
  const contactpageData = await getContactpage();

  return (
    <React.Fragment>
      <PageHeader pageName="Contact us" />
      <div className="relative pb-[10rem] min-h-[40rem] px-[2rem] ContactPage">
        <Image
          height={1000}
          width={1000}
          src={"/images/contact-bg.png"}
          alt="Contact Bg"
          className="absolute z-[1] top-0 left-0 h-full w-full object-cover bg-center"
        />
        <div className="sm:gap-y-[5rem] sm:gap-0 relative z-[2] grid grid-cols-12 gap-[2rem]">
          <div className="sm:order-last sm:col-span-12 relative col-span-7">
            <div className="sm:hidden ContactPage__overlay absolute top-0 z-[1] left-0 w-[90%] h-full">
              <Image
                className="w-full h-auto ContactPage__banner rotate-[-12deg]"
                height={1000}
                width={1000}
                src="/images/contact.webp"
                alt="Contact"
              />
            </div>

            <div className="mobile414:px-[1.5rem] mobile414:rounded-[1rem] mobile414:pb-[2rem] mobile414:pt-[1.5rem] sm:w-full relative z-[2] w-[60%] float-right bg-[#ffe9ed] rounded-[1.5rem] pt-[2rem] pb-[3rem] px-[2rem] flex flex-col gap-[2rem]">
              <h2 className="capitalize text-text-dark text-[2.25rem] font-semibold">
                react us now
              </h2>

              <form className="flex flex-col gap-[3.25rem]">
                <input
                  type="text"
                  placeholder="name"
                  className="mobile414:text-[1rem] outline-none focus:border-black border-b border-black/10 bg-transparent py-[.6rem] text-[1.25rem] placeholder:capitalize placeholder:text-black/40"
                />

                <input
                  type="email"
                  placeholder="your email"
                  className="mobile414:text-[1rem] outline-none focus:border-black border-b border-black/10 bg-transparent py-[.6rem] text-[1.25rem] placeholder:capitalize placeholder:text-black/40"
                />

                <input
                  type="text"
                  placeholder="subject"
                  className="mobile414:text-[1rem] outline-none focus:border-black border-b border-black/10 bg-transparent py-[.6rem] text-[1.25rem] placeholder:capitalize placeholder:text-black/40"
                />

                <textarea
                  placeholder="your message"
                  className="mobile414:text-[1rem] outline-none focus:border-black resize-none h-[8rem] border-b border-black/10 bg-transparent py-[.6rem] text-[1.25rem] placeholder:capitalize placeholder:text-black/40"
                />

                <Button className="mobile414:text-[.8rem]" variant={"default"}>
                  submit
                </Button>
              </form>
            </div>
          </div>

          <Component data={contactpageData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
