import React from "react";
import {twMerge} from "tailwind-merge";

type Properties = {
    children: React.ReactNode
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    className?: string
    disabled?: boolean
}

export function Button({ children, type = "button", onClick, className = "", disabled = false}: Properties) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className= {
                twMerge(`
                    bg-tertiary
                    rounded
                    px-4 py-2 text-1xl
                    md:px-6 md:py-4 md:text-3xl
                    transition-all duration-200
                    hover:scale-103 hover:bg-primary
                    active:scale-97
                    disabled:bg-surface-bright`
                    , className
                )
            }
        >
            {children}
        </button>
    )
}