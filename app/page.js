import Link from "next/link";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import the HeavyComponent component with suspense support
const HeavyComponent = dynamic(() => import("./components/heavy-component"), {
  suspense: true,
});

export default async function Home() {
  const res = await fetch("https://dummyjson.com/recipes", {
    next: {
      revalidate: 60, // seconds
    },
  });
  const recipes = await res.json();

  return (
    <>
      {/* Suspense boundary with a fallback */}
      <Suspense
        fallback={
          <h1 className="text-center font-bold pb-20">
            Loading user profile...
          </h1>
        }
      >
        <HeavyComponent />
      </Suspense>

      <ol className="ml-auto text-center">
        {recipes.recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
