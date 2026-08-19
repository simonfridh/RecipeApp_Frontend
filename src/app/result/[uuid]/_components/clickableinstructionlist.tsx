"use client"
import { useState } from "react"
import {twMerge} from "tailwind-merge"
import {Instruction} from "src/shared/types/instruction"

type Properties = {
    instructions: Instruction[]
    className?: string
}

export function ClickableInstructionList({ instructions, className }: Properties) {
    const [completed, setCompleted] = useState<Set<number>>(new Set())

    const toggleInstructionColor = (step: number) => {
        setCompleted( (currentSet: Set<number>) => {
            const newSet = new Set(currentSet)
            if(newSet.has(step))
                newSet.delete(step)
            else
                newSet.add(step)
            return newSet
            }
        )
    }

    return(
        <ul
            className={twMerge("flex flex-col flex-1 gap-2", className)}
        >
            {
                instructions.map((instruction) => {
                    const isCompleted = completed.has(instruction.step)
                    return (
                        <li
                            key={instruction.step}
                            onClick={() => toggleInstructionColor(instruction.step)}
                            className={twMerge("cursor-pointer rounded p-3 ring-1 ring-inset ring-tertiary/50 transition-colors",
                                isCompleted ? "bg-primary/10 line-through" : "bg-surface-bright"
                            )}
                        >
                            <p className={isCompleted ? "text-white/40" : "text-white"}>{instruction.step}. {instruction.text}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}