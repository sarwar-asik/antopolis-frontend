import React from 'react'

export default function Skeleton() {
    return (
        <div> <div className="p-2 p- rounded-md shadow-md mx-auto max-w-[180px] max-h-[210px]  bg-[#657287] ">
            <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-[140px] mx-auto h-[150px] rounded-lg bg-[#9FADC2] mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[110px] mx-auto h-[15px] rounded-lg bg-[#9FADC2] mb-4"></div>
            </div>
        </div></div>
    )
}
