import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

const SectionHeader = ({title}) => {
    return (
        <div className="bg-black flex flex-col gap-4 items-center justify-center py-4 w-[100%]">
            <FiArrowDown className="text-white text-2xl focus:outline-none"></FiArrowDown>
            <h1 className="m-text-xxxl text-white m-text-bold serif">{title}</h1>
        </div>
    );
};

export default SectionHeader;