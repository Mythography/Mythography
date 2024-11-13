"use client"

import React from 'react';
import HeroProductCard from "@/components/mythography/HeroProductCard";
import Image from 'next/image';

const Hero = () => {

    var products = [
        {title: 'Argus', description: 'An application monitoring software that can be tailored to your needs by configuring logs, status checks and so much more', logo: '/logos/argus/argus.svg'},
        {title: 'Balor', description: 'A plug-and-play threat detection engine that developers can connect to their applications via API calls', logo: '/logos/balor/balor.svg'},
        {title: 'Briareus', description: 'A comprehensive UX optimization toolset that enhances user interface through real-time behavioral analytics', logo: '/logos/briareus/briareus.svg'},
        {title: 'Fafnir', description: 'A standalone encryption library that offers easy-to-implement security protocols for data at rest and in transit', logo: '/logos/fafnir/fafnir.svg'},
    ]

    return (
        <div>
            <div className="w-[100vw] h-[94vh] p-12 hidden lg:flex items-center gap-6">
                <div className="flex justify-around items-center w-[100%]">
                    <div className="flex flex-col gap-32 xl:gap-16 lg:gap-12 md:gap-8">
                        <HeroProductCard title={products[0].title} description={products[0].description}
                                         logo={products[0].logo}></HeroProductCard>
                        <HeroProductCard title={products[1].title} description={products[1].description}
                                         logo={products[1].logo}></HeroProductCard>
                    </div>
                </div>
                <div className="flex flex-col gap-8 items-center text-center">
                    <div className="flex flex-col items-center text-center">
                        <Image src="/logos/mythography/mythography.svg" alt="" width="140" height="140" className="w-24 lg:w-40"></Image>
                        <h1 className="m-text-xxxl text-black m-text-bold serif">Mythography</h1>
                        <h1 className="m-text-lg">Application Support Suite</h1>
                    </div>
                    <div className="h-0.5 w-full bg-gray-200"></div>
                    <p>Giant Solutions to complex problems. The Mythography Application Support Suite provides a modular
                        set of tools that will allow your application to perform at 100% of its potential</p>
                    <div className="flex gap-8 items-center">
                        <button className="btn btn-tertiary-fill">Try Mythography</button>
                        <button className="btn btn-tertiary-outline">Contact Us</button>
                    </div>
                </div>
                <div className="flex justify-around items-center w-[100%]">
                    <div className="flex flex-col gap-32 xl:gap-16 lg:gap-12 md:gap-8">
                        <HeroProductCard title={products[2].title} description={products[2].description}
                                         logo={products[2].logo}></HeroProductCard>
                        <HeroProductCard title={products[3].title} description={products[3].description}
                                         logo={products[3].logo}></HeroProductCard>
                    </div>
                </div>
            </div>
            <div className="w-[100vw] p-12 pb-32 flex gap-12 flex-col lg:hidden items-center">
                <div className="flex flex-col gap-8 items-center text-center">
                    <div className="flex flex-col items-center text-center">
                        <Image src="/logos/mythography/mythography.svg" alt="" width="140" height="140"></Image>
                        <h1 className="m-text-xxxl text-black m-text-bold serif">Mythography</h1>
                        <h1 className="m-text-lg">Application Support Suite</h1>
                    </div>
                    <div className="h-0.5 w-full bg-gray-200"></div>
                    <p>Giant Solutions to complex problems. The Mythography Application Support Suite provides a
                        modular
                        set of tools that will allow your application to perform at 100% of its potential</p>
                    <div className="flex gap-8 items-center">
                        <button className="btn btn-tertiary-fill">Try Mythography</button>
                        <button className="btn btn-tertiary-outline">Contact Us</button>
                    </div>
                </div>
                <div className="flex justify-center gap-12 flex-wrap items-center w-[100%]">
                    <HeroProductCard title={products[0].title} description={products[0].description}
                                     logo={products[0].logo}></HeroProductCard>
                    <HeroProductCard title={products[1].title} description={products[1].description}
                                     logo={products[1].logo}></HeroProductCard>
                    <HeroProductCard title={products[2].title} description={products[2].description}
                                     logo={products[2].logo}></HeroProductCard>
                    <HeroProductCard title={products[3].title} description={products[3].description}
                                     logo={products[3].logo}></HeroProductCard>
                </div>
            </div>
        </div>


    );
};

export default Hero;