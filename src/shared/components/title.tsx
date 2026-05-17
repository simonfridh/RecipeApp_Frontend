import React from "react";


type Properties = {
    title: string
    className?: string
}

export default function Title({ title, className }: Properties) {
    return (
        <h1 className={`text-3xl md:text-5xl text-primary p-2 font-bold ${className}`}>
            {title}
        </h1>
    )
}