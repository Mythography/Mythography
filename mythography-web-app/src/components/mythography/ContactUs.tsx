"use client"

import React, {useState} from 'react';
import ProductsCarouselBar from "@/components/mythography/ProductsCarouselBar";
import Image from "next/image";

const ContactUs = () => {
    var products = [
        {title: 'Argus', detailedDescription: 'Argus is your vigilant guardian for application health, designed to monitor every corner of your system with precision and reliability. From real-time performance tracking to detailed insights into app stability, Argus ensures you’re always one step ahead of potential issues, helping you maintain a high standard of quality and uptime.', logo: '/logos/argus/argus-outline-dark.svg', activeLogo: '/logos/argus/argus-outline.svg', image: '/images/argus.png'},
        {title: 'Balor', detailedDescription: 'Balor is a powerful tool for threat detection, inspired by the sharp perception of its mythological namesake. With Balor, you gain an extra set of eyes that continuously scans for vulnerabilities, identifies suspicious activity, and keeps your application secure. Alerts are sent through customizable channels, giving you immediate insights when potential threats arise.', logo: '/logos/balor/balor-outline-dark.svg', activeLogo: '/logos/balor/balor-outline.svg', image: '/images/argus.png'},
        {title: 'Briareus', detailedDescription: 'Briareus helps you understand your users’ experience through advanced analytics. Like its mythological counterpart with a hundred hands, Briareus captures every interaction across your interface, offering heatmaps, session replays, and click maps to reveal user behavior patterns. With this knowledge, you can make data-driven adjustments to optimize your app’s design and improve user engagement.', logo: '/logos/briareus/briareus-outline-dark.svg', activeLogo: '/logos/briareus/briareus-outline.svg', image: '/images/argus.png'},
        {title: 'Fafnir', detailedDescription: 'Fafnir is your solution for comprehensive encryption, guarding sensitive data with strength and flexibility. Whether protecting data at rest or in transit, Fafnir offers configurable encryption protocols that adapt to your needs, giving you peace of mind knowing your application’s data is secure and compliant with modern standards.', logo: '/logos/fafnir/fafnir-outline-dark.svg', activeLogo: '/logos/fafnir/fafnir-outline.svg', image: '/images/argus.png'},
    ]
    // Using useState to manage the current selected product
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    function showProduct(product) {
        setSelectedProduct(product);
    }

    return (
        <div className="p-12 pb-32 flex flex-col gap-12 items-center">
            <ProductsCarouselBar showProduct={showProduct} products={products} />
            <div className="flex max-w-[1600px] flex-col md:flex-row md:items-start gap-8 md:gap-16 justify-center md:w-full">
                <div className="w-full md:w-1/2 rounded-xl">
                    <Image
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        layout="responsive"
                        width={100}
                        height={100}
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-8 w-full md:w-1/2">
                    <h3 className="m-text-xxl m-text-bold serif">
                        {selectedProduct.title}
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
                    <p>{selectedProduct.detailedDescription}</p>
                    <button className="btn btn-tertiary-fill max-w-[200px]">Explore {selectedProduct.title}</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;