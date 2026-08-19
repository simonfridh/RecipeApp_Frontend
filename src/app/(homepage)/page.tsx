import { RecipeInput } from './_components/recipeinput'
import { Title } from "@/shared/components/title"

export default function Home() {
  return (
    <main>
        <div className="flex flex-col gap-2 items-center justify-center min-h-dvh w-full p-4">

            <Title title={"Recipe Optimizer."}></Title>
            <p className="text-2xl">
                Generate a new healthier cooking recipe similar to an online recipe of your choice
            </p>
            <RecipeInput placeholder="Enter recipe URL" className="py-5"/>

        </div>
    </main>
  )
}