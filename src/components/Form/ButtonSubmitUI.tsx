import React from 'react'

export default function ButtonSubmit({ text, color, bg, width, height, extraClass }: {
    text: string, color?: string, bg?: string, width?: string, height?: string, extraClass?: string
}) {
    return (
        <button
            className={`border px-6 py-3 rounded-[10px] w-ful text-xl font-[500] text-nowrap ${extraClass || ""}`}
            style={{
                color: color,
                borderColor: color,
                backgroundColor: bg,
                width: width || '100%',
                height: height || '56px'
            }}
            type='submit'
        >
            {text}
        </button>
    )
}