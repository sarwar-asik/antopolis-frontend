import React from 'react'

export default function Skeleton() {
    return (
        <div> <div className="p-6 rounded-md shadow-md mx-auto max-w-fit bg-[#657287] ">
            <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-[200px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[190px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
            </div>
        </div></div>
    )
}
