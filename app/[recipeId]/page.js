import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { recipeId } = await params;

  return {
    title: `${recipeId} title`,
    description: `${recipeId} description goes here`,
  };
}

export async function generateStaticParams() {
  const recipes = await fetch("https://dummyjson.com/recipes").then((res) =>
    res.json(),
  );

  return recipes.recipes.map((recipe) => ({
    recipeId: recipe.id.toString(),
  }));
}

export default async function Recipe({ params }) {
  const { recipeId } = await params;

  // throw new Error("Something went wrong");

  const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  const recipe = await res.json();

  if (!recipe.id) notFound();

  return (
    <div className="flex flex-col justify-center items-center">
      <Image alt={recipe.name} src={recipe.image} width={200} height={200} />
      <h1 className="text-center font-bold p-5">{recipe.name}</h1>
    </div>
  );
}
