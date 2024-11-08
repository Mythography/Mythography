"use client"

import React from 'react';
import ProductsCarouselBar from "@/components/mythography/ProductsCarouselBar";

const Hero = () => {

    var products = [
        {title: 'Argus', detailedDescription: 'An application monitoring software that can be tailored to your needs by configuring logs, status checks and so much more', logo: '/logos/argus/argus-outline-dark.svg', activeLogo: '/logos/argus/argus-outline.svg'},
        {title: 'Balor', detailedDescription: 'A plug-and-play threat detection engine that developers can connect to their applications via API calls', logo: '/logos/balor/balor-outline-dark.svg', activeLogo: '/logos/balor/balor-outline.svg'},
        {title: 'Briareus', detailedDescription: 'A comprehensive UX optimization toolset that enhances user interface through real-time behavioral analytics', logo: '/logos/briareus/briareus-outline-dark.svg', activeLogo: '/logos/briareus/briareus-outline.svg'},
        {title: 'Fafnir', detailedDescription: 'A standalone encryption library that offers easy-to-implement security protocols for data at rest and in transit', logo: '/logos/fafnir/fafnir-outline-dark.svg', activeLogo: '/logos/fafnir/fafnir-outline.svg'},
    ]

    function showProduct() {

    }

    return (
        <div className="flex items-center">
            <ProductsCarouselBar showProduct={showProduct} products={products}></ProductsCarouselBar>
            <div></div>
        </div>
    );
};

export default Hero;