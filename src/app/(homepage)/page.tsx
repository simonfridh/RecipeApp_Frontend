import { RecipeInput } from './_components/recipeinput'
import { Title } from "@/shared/components/title";

export default function Home() {
  return (
    <main>
        <div className="flex flex-col gap-3 items-center justify-center min-h-dvh w-full p-4">

            <Title title={"Recipe Optimizer."}></Title>
            <RecipeInput placeholder="Enter recipe URL" />

        </div>
    </main>
  );
}