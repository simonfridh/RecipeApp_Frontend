import RecipeInput from './components/recipeinput'

export default function Home() {
  return (
    <main>
        <div className="flex flex-col items-center justify-center min-h-dvh w-full p-4">


            <h1>Recipe Optimizer</h1>
            <RecipeInput placeholder="Enter recipe URL" />

        </div>
    </main>
  );
}