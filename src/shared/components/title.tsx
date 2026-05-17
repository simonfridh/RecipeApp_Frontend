import React from "react";


type Properties = {
    children?: React.ReactNode
}

export default function Title({ children }: Properties) {
    return (
        <h1
            className="text-5xl text-primary p-5 font-bold"
        >
            {children}
        </h1>
    )
}