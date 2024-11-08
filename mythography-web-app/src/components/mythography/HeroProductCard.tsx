"use client"

import React, {useState} from 'react';
import Image from 'next/image';

interface HeroProductCardProps {
    title: string;
    description: string;
    logo: string;
}

const HeroProductCard = ({ title, description, logo }) => {

    return (
        <div className="border border-black rounded-lg w-[360px] h-[360px] p-8 flex flex-col items-center justify-center text-center bg-gray-100">
            <Image src={logo} alt="" width="144" height="144"></Image>
            <h4 className={`m-text-bold m-text-xl text-black mb-4`}>{title}</h4>
            <p className={`m-text-regular text-black m-text-sm`}>{description}</p>
        </div>
    );
};

export default HeroProductCard;