"use client"

import React, {useState} from 'react';
import Image from 'next/image';

interface HeroProductCardProps {
    title: string;
    description: string;
    logo: string;
}

const HeroProductCard = ({ title, description, logo }: HeroProductCardProps) => {
    return (
        <div className="border border-black rounded-lg w-full max-w-[340px] min-w-[250px] h-auto p-4 md:p-8 flex flex-col items-center justify-center text-center bg-gray-100">
            <Image src={logo} alt={title} width="120" height="120" className="mb-4 w-16 lg:w-32" />
            <h4 className="m-text-bold m-text-lg text-black mb-4">{title}</h4>
            <p className="m-text-regular m-text-xs text-black m-text-sm">{description}</p>
        </div>
    );
};

export default HeroProductCard;