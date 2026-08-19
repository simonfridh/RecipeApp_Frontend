import React from "react"
import {twMerge} from "tailwind-merge"

type Properties = {
    title: string
    className?: string
}

export function Title({ title, className }: Properties) {
    return (
        <h1 className={twMerge("text-3xl md:text-5xl text-primary font-bold",className)}>
            {title}
        </h1>
    )
}