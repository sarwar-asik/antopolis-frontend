import React from 'react';

interface FloatingLabelInputProps {
    id: string;
    label: string;
    value?: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
}
export default function InputUI({
    id,
    label,
    value,
    name,
    onChange,
    type = 'text',
    className = '',
    inputClassName = '',
    labelClassName = ''
}: FloatingLabelInputProps) {
    return (
        <div className={` py-2 my-3 ${className}`}>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="rounded-lg border border-black  bg-[#F2F2F2] px-4 py-3 text-black  w-full  duration-200 outline-none"
                placeholder={label}
            />

            
        </div>
    )
}

