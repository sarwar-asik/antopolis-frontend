// components/DropdownSelect.tsx
import React, { useState } from 'react';

export type IOption = {
    label: string, value: string
}
interface SelectProps {
    options: IOption[];
    label: string;
    onValueChange?: (value: IOption) => void;
    setSelectedValue: any
    selectedValue: IOption
}

const SelectUI: React.FC<SelectProps> = ({ options, label, onValueChange, setSelectedValue, selectedValue }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value: IOption) => {
        setIsOpen(false);
        setSelectedValue(value)
        // onValueChange(value);
    };

    return (
        <div>
            {/* dropdown - btn */}
            <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex w-full items-center justify-between my-2 rounded-xl bg-white px-6 py-3 border border-black">
                <h1 className="font-medium text-black">{selectedValue.label}</h1>
                <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}
                    </g>
                </svg>
            </div>

            {isOpen && <div className={`${isOpen ? 'visible top-0 opacity-100' : 'invisible -top-3 opacity-0'} relative mx-auto mb-3  w-72 rounded-xl  border duration-300 bg-slate-100`}>
                {options?.map((option, idx) => (
                    <div key={idx} onClick={() => handleOptionClick(option)} className="px-6 py-2 border-y text-gray-600 hover:bg-gray-100">
                        {option.label}
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default SelectUI;
