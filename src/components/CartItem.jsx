export default function CartItem({
  item,
  increase,
  decrease,
  remove
}) {
  return (
    <div className="flex items-center gap-4 border-b py-4">

      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-xl"
      />

      <div className="flex-1">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-orange-500 font-semibold">
          ₹{item.price}
        </p>

        <button
          onClick={() => remove(item.id)}
          className="text-red-500 text-sm mt-1"
        >
          Remove
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decrease(item.id)}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          -
        </button>

        <span className="font-bold">{item.quantity}</span>

        <button
          onClick={() => increase(item.id)}
          className="bg-orange-500 text-white px-3 py-1 rounded"
        >
          +
        </button>
      </div>

    </div>
  );
}