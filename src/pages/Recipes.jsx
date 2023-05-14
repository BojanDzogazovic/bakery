import { RecipesContent } from "../components/recipes/RecipesContent";

export const Recipes = () => {
  return (
    <div className="dashboard__content">
      <h1 className="dashboard__title">RECIPES</h1>
      <RecipesContent />
    </div>
  );
};
