import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
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

          <div className="sm:col-span-12 col-span-5">
            <h1 className="mobile414:text-[2.5rem] capitalize tracking-[.5px] text-text-dark text-[3.5rem] font-[700] leading-[1.35] mb-[2.5rem]">
              We Are Always Available For You & Your Pets
            </h1>

            <p className="mobile414:text-[.9rem] mobile414:leading-[1.75] font-readex_pro text-[1.1rem] leading-[1.75] mb-[2rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              aspernatur praesentium excepturi. Debitis perferendis harum illum
              dolor ad aperiam quasi, doloremque.
            </p>

            <div className="flex flex-col gap-[2.5rem]">
              <div className="">
                <div className="flex items-center gap-3 mb-[.5rem]">
                  <Image
                    className="mobile414:w-[1.25rem] mobile414:h-auto"
                    height={25}
                    width={25}
                    src="/icons/location.svg"
                    alt="Location Icon"
                  />
                  <h3 className="mobile414:text-[1rem] uppercase font-readex_pro font-semibold text-[1.25rem]">
                    address
                  </h3>
                </div>

                <p className="mobile414:text-[.9rem] ml-[1.5rem] text-[1.1rem] font-readex_pro">
                  4821 Ridge Top Cir, Casper, WY 82609, United States
                </p>
              </div>

              <div className="">
                <div className="flex items-center gap-3 mb-[.5rem]">
                  <Image
                    className="mobile414:w-[1.25rem] mobile414:h-auto"
                    height={25}
                    width={25}
                    src="/icons/phone.svg"
                    alt="Location Icon"
                  />
                  <h3 className="mobile414:text-[1rem] uppercase font-readex_pro font-semibold text-[1.25rem]">
                    contact
                  </h3>
                </div>

                <ul className="mobile414:text-[.9rem] ml-[1.5rem] text-[1.1rem] font-readex_pro transition-all hover:text-primary cursor-pointer flex flex-col gap-1">
                  <li>+00 123 456 789</li>
                  <li>+000 1234 56789</li>
                </ul>
              </div>

              <div className="">
                <div className="flex items-center gap-3 mb-[.5rem]">
                  <Image
                    className="mobile414:w-[1.25rem] mobile414:h-auto"
                    height={25}
                    width={25}
                    src="/icons/email.svg"
                    alt="Location Icon"
                  />
                  <h3 className="mobile414:text-[1rem] uppercase font-readex_pro font-semibold text-[1.25rem]">
                    email
                  </h3>
                </div>

                <ul className="mobile414:text-[.9rem] ml-[1.5rem] text-[1.1rem] font-readex_pro transition-all hover:text-primary cursor-pointer flex flex-col gap-1">
                  <li>info@example.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
