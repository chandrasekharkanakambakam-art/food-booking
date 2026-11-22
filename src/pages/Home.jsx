import { useState } from "react";
import { foods, categories } from "../data/foods";
import FoodCard from "../components/FoodCard";

export default function Home({ addToCart }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((food) => {
    const matchesCategory =
      category === "All" || food.category === category;

    const matchesSearch =
      food.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>

      {/* Hero Banner */}

      <section className="bg-orange-50">
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">

          <div className="flex-1">
            <p className="text-orange-500 font-bold mb-3">
              WELCOME TO FOODIEHUB
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Delicious Food
              <span className="text-orange-500"> Delivered </span>
              To Your Door
            </h1>

            <p className="text-gray-600 mt-5 text-lg">
              Order your favorite food from the best restaurants
              and enjoy delicious meals at home.
            </p>

            <a
              href="#menu"
              className="inline-block mt-7 bg-orange-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-orange-600"
            >
              Order Now →
            </a>
          </div>

          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
              alt="Delicious food"
              className="rounded-3xl shadow-xl w-full h-72 md:h-96 object-cover"
            />
          </div>

        </div>
      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-5 py-12">

        <h2 className="text-3xl font-bold mb-6">
          Explore Categories
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-6 py-3 rounded-full whitespace-nowrap font-semibold ${
                category === item
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-orange-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      </section>

      {/* Food Menu */}

      <section
        id="menu"
        className="max-w-7xl mx-auto px-5 pb-16"
      >

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-7">

          <h2 className="text-3xl font-bold">
            Popular Dishes
          </h2>

          <input
            type="text"
            placeholder="Search your favorite food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 w-full sm:w-80 outline-none focus:ring-2 focus:ring-orange-400"
          />

        </div>

        {filteredFoods.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            No food items found. Try another search.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                addToCart={addToCart}
              />
            ))}

          </div>
        )}

      </section>

    </div>
  );
}