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
    isRequired?: boolean
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
    labelClassName = '',
    isRequired = false
}: FloatingLabelInputProps) {
    return (
        <div className={` py-2 my-3 ${className}`}>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={isRequired}
                className="rounded-lg border border-black  bg-[#F2F2F2] px-4 py-4 text-black  w-full  duration-200 outline-none placeholder:text-xl placeholder:text-slate-800"
                placeholder={label}
            />


        </div>
    )
}

