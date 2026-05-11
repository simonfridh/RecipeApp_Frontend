import React from "react";

type ButtonProperties = {
    children: React.ReactNode
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    className?: string
    disabled?: boolean
}

export default function Button({ children, type = "button", onClick, className = "", disabled = false}: ButtonProperties) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`p-1 border-2 rounded border-blue-300
            transition-all duration-200
            hover:scale-102
            active:scale-98
            
            ${className}`}
        >
            {children}
        </button>
    )
}