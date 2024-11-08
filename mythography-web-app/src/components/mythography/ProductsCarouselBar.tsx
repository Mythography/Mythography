"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const ProductsCarouselBar = ({ showProduct, products }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
        showProduct(products[index]);
    };

    const handlePrevClick = () => {
        const newIndex = (activeIndex - 1 + products.length) % products.length;
        setActiveIndex(newIndex);
        showProduct(products[newIndex]);
    };

    const handleNextClick = () => {
        const newIndex = (activeIndex + 1) % products.length;
        setActiveIndex(newIndex);
        showProduct(products[newIndex]);
    };

    return (
        <div className="flex gap-8 items-center">
            <button className="text-4xl hover:text-gray-600" onClick={handlePrevClick}>
                <FiArrowLeftCircle />
            </button>
            {products.map((product, index) => {
                const isActive = index === activeIndex;
                return (
                    <div
                        className={`border-[3px] rounded border-black hover:border-gray-600 flex justify-center items-center p-3 ${isActive ? "bg-gray-100" : ""}`}
                        key={product.title}
                        style={{cursor: 'pointer'}}
                        onClick={() => handleClick(index)}
                    >
                        <Image src={isActive ? product.activeLogo : product.logo} alt={product.title} width="48" height="48" />
                    </div>
                );
            })}
            <button className="text-4xl hover:text-gray-600" onClick={handleNextClick}>
                <FiArrowRightCircle />
            </button>
        </div>
    );
};

export default ProductsCarouselBar;