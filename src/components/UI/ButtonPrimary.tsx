import React from 'react'

export default function ButtonPrimary({ text, color, bg, width, height, extraClass,onClick }: {
    text: string, color?: string, bg?: string, width?: string, height?: string, extraClass?: string ; onClick?: () => void
}) {
    return (
        <button
            className={`border px-4 py-2 capitalize rounded-[100px] text-lg font-[400] text-nowrap ${extraClass || ""}`}
            onClick={onClick}
            style={{
                color: color,
                borderColor: color,
                backgroundColor: bg,
                width: width || 'min-w-[100px]',
                height: height || '46px'
            }}
        >
            {text}
        </button>
    )
}