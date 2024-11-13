"use client"

import React, {useState} from 'react';
import ProductsCarouselBar from "@/components/mythography/ProductsCarouselBar";
import Image from "next/image";

const OurValues = () => {
    return (
        <div className="p-12 pb-32 flex justify-center">
            <div
                className="flex max-w-[1600px] flex-col md:flex-row md:items-start gap-8 md:gap-16 justify-center md:w-full">
                <div className="flex flex-col gap-8 w-full md:w-1/2">
                    <h3 className="m-text-xxl m-text-bold serif">
                        Giant Solutions
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
                    <p>At Mythography, we draw inspiration from powerful figures of myth, instilling their virtues into
                        each of our tools to provide support and insight to modern developers. Argus, known for
                        vigilance, embodies our commitment to continuous, reliable monitoring, ensuring every part of
                        your application is in top health. Balor, a figure of perception and insight, powers our threat
                        detection, watching for unseen vulnerabilities and keeping your applications secure. Briareus,
                        with his hundred hands, represents our dedication to enhancing user experience through detailed
                        analytics, providing insights into user behavior across every interface. Finally, Fafnir, the
                        symbol of transformation and protection, drives our encryption standards, adapting to secure
                        your data at rest and in transit. Together, these giants enable Mythography to deliver
                        user-friendly solutions that empower developers to create with confidence.</p>
                    <button className="btn btn-tertiary-fill max-w-[200px]">Try Mythography</button>
                </div>
                <div className="w-full md:w-1/2 rounded-xl">
                    <Image
                        src="/images/values.png"
                        alt="Our Values"
                        layout="responsive"
                        width={100}
                        height={100}
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>

    );
};

export default OurValues;