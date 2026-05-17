import React from "react";

type Properties = {
    children: React.ReactNode
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    className?: string
    disabled?: boolean
}

export default function Button({ children, type = "button", onClick, className = "", disabled = false}: Properties) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className= {`
            bg-tertiary
            rounded
            px-5 py-3 text-2xl
            transition-all duration-200
            hover:scale-103 hover:bg-primary
            active:scale-97
            ${className}
            `}
        >
            {children}
        </button>
    )
}