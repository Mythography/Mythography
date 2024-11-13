"use client"

import React, {useState} from 'react';
import ProductsCarouselBar from "@/components/mythography/ProductsCarouselBar";
import Image from "next/image";

const ContactUs = () => {

    return (
        <div className="p-12 pb-32 flex justify-center">
            <div className="flex max-w-[1600px] flex-col md:flex-row md:items-start gap-8 md:gap-16 justify-center md:w-full">
                <div className="flex flex-col gap-8 w-full md:w-1/2">
                    <h3 className="m-text-xxl m-text-bold serif">
                        Contact Information
                    </h3>
                    <div
                        className="repeating-svg bg-[url('/icons/divider-box.svg')]"
                        style={{
                            backgroundImage: "url('/icons/divider-box.svg')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "24px 16px",
                            paddingBottom: "18px",
                            height: "14px",
                        }}
                    ></div>
                    <div>
                        <p>Email:</p>
                        <p>Mythographydevelopment@gmail.com</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a className="no-underline" href="https://www.linkedin.com/in/justicegooch/" target="_blank">
                            <Image src="/icons/linkedin.svg" alt="LinkedIn" width="48" height="48"></Image>
                        </a>
                        <a className="no-underline" href="https://github.com/Mythography" target="_blank">
                            <Image src="/icons/github.svg" alt="LinkedIn" width="48" height="48"></Image>
                        </a>
                        <a className="no-underline" href="mailto:Mythographydevelopment@gmail.com">
                            <Image src="/icons/email.svg" alt="Email" width="48" height="48"></Image>
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 rounded-xl border border-black flex flex-col p-6 gap-6">
                    <div className="flex items-center gap-6">
                        <input className="input-text w-1/2" placeholder="First Name..."/>
                        <input className="input-text w-1/2" placeholder="Last Name..."/>
                    </div>
                    <input className="input-text w-full" placeholder="Email..."/>
                    <textarea className="input-text w-full" placeholder="Your message here..."></textarea>
                    <button className="btn btn-tertiary-fill max-w-[200px]">Submit Message</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;