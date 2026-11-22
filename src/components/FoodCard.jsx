export default function FoodCard({ food, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-48 object-cover"
        />

        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold">
          ⭐ {food.rating}
        </span>
      </div>

      <div className="p-4">

        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{food.name}</h3>
          <span className="text-green-600 font-semibold">
            ₹{food.price}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-2">
          {food.description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-gray-500 text-sm">
            ⏱ {food.time}
          </span>

          <button
            onClick={() => addToCart(food)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            Add +
          </button>

        </div>

      </div>
    </div>
  );
}
