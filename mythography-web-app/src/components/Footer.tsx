import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-black flex justify-between p-6">
            <div className="flex flex-col gap-8">
                <div className="flex gap-8 items-center">
                    <Image src="/logos/mythography/mythography-dark.svg" alt="" width="92" height="92"></Image>
                    <div className="flex flex-col">
                        <h2 className="serif m-text-xxl m-text-bold text-white">Mythography</h2>
                        <h4 className="sans m-text-md m-text-regular text-white">Application Support Suite</h4>
                    </div>
                </div>
                <p className="text-gray-300 m-text-regular">© 2024, Justice Application Development LLC</p>
            </div>
            <div className="flex items-start gap-16">
                <div className="flex flex-col space-y-2">
                    <p className="m-text-sm text-gray-300 m-text-regular">Resources</p>
                    <a href="#" className="m-text-sm text-white hover:text-gray-200 m-text-semibold">Privacy Policy</a>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="m-text-sm text-gray-300 m-text-regular">Product Links</p>
                    <a href="#" className="m-text-sm text-white hover:text-gray-200 m-text-semibold">Argus</a>
                    <a href="#" className="m-text-sm text-white hover:text-gray-200 m-text-semibold">Balor</a>
                    <a href="#" className="m-text-sm text-white hover:text-gray-200 m-text-semibold">Briareus</a>
                    <a href="#" className="m-text-sm text-white hover:text-gray-200 m-text-semibold">Fafnir</a>
                </div>
                <button className="btn btn-secondary-outline dark-btn-secondary-outline">Back to Top</button>
            </div>
        </footer>
    );
};

export default Footer;