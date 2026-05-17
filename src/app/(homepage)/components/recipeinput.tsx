import { postRecipeUrl } from "../actions/postrecipeurl"
import Button from "@/shared/components/Button";

type Properties = {
    placeholder?: string;
}

export default function RecipeInput({ placeholder }: Properties) {
    return (
        <form action={postRecipeUrl} className="flex gap-1">
            <input
                name="recipeUrl"
                placeholder={placeholder}
                required
                className="border-2 border-gray-400 rounded p-1 focus:outline-none focus:border-blue-300"
            />
            <Button type="submit">
                Optimize
            </Button>
        </form>
    );
}