import { postRecipeUrl } from "../actions/postrecipeurl"
import Button from "@/shared/components/button";

type Properties = {
    placeholder?: string;
}

export default function RecipeInput({ placeholder }: Properties) {
    return (
        <form action={postRecipeUrl} className="flex gap-2">
            <input
                name="recipeUrl"
                placeholder={placeholder}
                required
                className="rounded border-tertiary border-2 p-3 text-2xl focus:outline-none focus:border-primary text-center"
            />
            <Button type="submit">
                Optimize
            </Button>
        </form>
    );
}