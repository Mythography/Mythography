"use client"

import React, {useState} from 'react';
import ProductsCarouselBar from "@/components/mythography/ProductsCarouselBar";
import Image from "next/image";

const MeetTheCreator = () => {
    return (
        <div className="p-12 pb-32 flex justify-center">
            <div className="flex max-w-[1600px] flex-col md:flex-row md:items-start gap-8 md:gap-16 justify-center md:w-full">
                <div className="w-full md:w-1/2 rounded-xl">
                    <Image
                        src="/images/justice.png"
                        alt="Justice Gooch"
                        layout="responsive"
                        width={100}
                        height={100}
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-8 w-full md:w-1/2">
                    <h3 className="m-text-xxl m-text-bold serif">
                        Hi, I'm Justice
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
                    <p>I created Mythography with a simple mission: to make developer tools that are as inspiring as they are useful. As I have spent more time in the tech industry learning about both development and UX, I hace seen the need for tools that are not only powerful but also designed to fit seamlessly into a developer’s workflow. Inspired by the timeless symbols of vigilance, security, and insight, Mythography embodies the values I believe all great software should offer—strength, adaptability, and simplicity. My goal is for every tool I create to give developers the freedom to build confidently.  Thanks for visiting this site, and I hope you will give the Mythography Suite a try!</p>
                    <div className="flex gap-4 items-center">
                        <a className="no-underline" href="https://www.linkedin.com/in/justicegooch/" target="_blank">
                            <Image src="/icons/linkedin.svg" alt="LinkedIn" width="48" height="48"></Image>
                        </a>
                        <a className="no-underline" href="https://github.com/Jugooch/" target="_blank">
                            <Image src="/icons/github.svg" alt="LinkedIn" width="48" height="48"></Image>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetTheCreator;