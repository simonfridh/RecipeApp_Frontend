import {Instruction} from "src/shared/types/instruction";

type Properties = {
    instructions: Instruction[]
    className?: string
}

export function InstructionList({ instructions, className }: Properties) {
    return(
        <ul
            className={`flex flex-col flex-1 rounded p-2 ring-inset ring-tertiary ring-2 ${className}`
            }
        >
            {
                instructions.map((instruction) => {
                    return (<li key={instruction.step}> {instruction.step}. {instruction.text}</li>)
                })
            }
        </ul>
    )
}