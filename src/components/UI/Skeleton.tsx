import React from 'react'

export default function Skeleton() {
    return (
        <div> <div className="p-2 p- rounded-md shadow-md mx-auto h-[174px w-[143px]   bg-[#657287] ">
            <div className="animate-pulse">
                {/* // Image Skeleton */}
                <div className="w-[100px] mx-auto h-[155px] rounded-lg bg-[#9FADC2] mb-6"></div>
                {/* // Title Skeleton */}
                <div className="w-[80px] mx-auto h-[14px] rounded-lg bg-[#9FADC2] mb-4"></div>
            </div>
        </div></div>
    )
}
