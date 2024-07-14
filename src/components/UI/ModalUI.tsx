import React, { useState, ReactNode } from 'react';

interface ModalUIProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const ModalUI: React.FC<ModalUIProps> = ({ isOpen, onClose, children }) => {
    return (
        <div
            onClick={onClose}
            className={`fixed z-[100] flex items-center justify-center ${isOpen ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute w-full rounded-lg bg-white px-2 py-3 drop-shadow-2xl sm:w-[500px] ${isOpen ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}
            >
                <svg
                    onClick={onClose}
                    className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                </svg>
                <div className="px-5 pb-3 pt-2 lg:py-5  lg:px-8">{children}</div>
            </div>
        </div>
    );
};

export default ModalUI;
