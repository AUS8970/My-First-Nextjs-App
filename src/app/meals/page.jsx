import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "All Meals",
  description: "Meals loaded from MealDB API",
};

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <div className="flex justify-center py-5">
        <MealSearchInput />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {meals?.map((singleMeal) => {
          return (
            <div key={singleMeal?.idMeal} className={`border p-3 space-y-3 rounded-3xl ${roboto.className}`}>
              <Image
                src={singleMeal?.strMealThumb}
                width={641}
                height={641}
                className="rounded-xl"
                alt={singleMeal?.strMeal}
              />
              <p className="text-2xl font-bold">{singleMeal?.strMeal}</p>
              <div className="">
                <p className="">
                  {(singleMeal?.strInstructions).split(" ").slice(0, 30).join(" ")} 
                  <span className=""> 
                    <Link href={`/meals/${singleMeal.idMeal}`}> ...See more </Link> 
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}