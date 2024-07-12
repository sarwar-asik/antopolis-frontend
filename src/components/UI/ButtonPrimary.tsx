import React from 'react'

export default function ButtonPrimary({ text, color, bg, width, height, extraClass }: {
    text: string, color?: string, bg?: string, width?: string, height?: string, extraClass?: string
}) {
    return (
        <button
            className={`border px-4 py-2 capitalize rounded-[100px] text-lg font-[400] text-nowrap ${extraClass || ""}`}
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