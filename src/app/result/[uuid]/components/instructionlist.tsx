import {Instruction} from "@/shared/types/instruction";

type Properties = {
    instructions: Instruction[];
}

export function InstructionList({ instructions }: Properties) {
    return(
        <ul>
            {
                instructions.map((instruction) => {
                    return (<li key={instruction.step}> {instruction.step}. {instruction.text}</li>)
                })
            }
        </ul>
    )
}