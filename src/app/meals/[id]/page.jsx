import Image from "next/image";

const fetchSingleMeal = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).id;

  // fetch data
  const [singleMeal] = await fetchSingleMeal(id);
  console.log(singleMeal);
  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions,
  };
}

export default async function SingleMealPage({ params }) {
  const p = await params;

  const singleMeal = await fetchSingleMeal(p?.id);
  console.log(singleMeal.map(meal => console.log(meal?.strIngredient3)))

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg">
      {
        singleMeal.map(meal =>
          <div className="">
            <div className="text-center mb-5">
              <h1 className="text-3xl font-bold mt-4">{meal?.strMeal}</h1>
              <p className="text-gray-400">{meal?.strCategory} | {meal?.strArea}</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {/* মেইল ছবির সেকশন */}
              <div className="col-span-1">
                <Image
                  src={meal?.strMealThumb}
                  width={500}
                  height={500}
                  alt={meal?.strMeal}
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="col-span-1">
                {/* উপকরণ তালিকা */}
                <div className="">
                  <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
                  <ul className="list-disc text-sm text-gray-400">
                    {Array.from({ length: 20 }, (_, i) => meal[`strIngredient${i + 1}`])
                      .filter(ingredient => ingredient && ingredient.trim())
                      .map((ingredient, index) => (
                        <span key={index}> {ingredient}, </span>
                      ))}
                  </ul>
                </div>

                {/* প্রস্তুত প্রণালী */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{meal?.strInstructions}</p>
                </div>
              </div>
            </div>
            <div className="">
              {/* ইউটিউব ভিডিও এম্বেড */}
              {meal?.strYoutube && (
                <div className="mt-6 text-center">
                  <h2 className="text-xl font-semibold mb-2">Watch Tutorial:</h2>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"
                    allowFullScreen
                    className="mx-auto rounded-lg shadow-lg"
                  ></iframe>
                </div>
                )}
            </div>
          </div>
        )
      }
    </div>
  );
}