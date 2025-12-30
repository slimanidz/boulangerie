export default function ProductCard({ product }) {
  const addToCart = () => {
    console.log(product);
  };
  return (
    <div className="bg-white  rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={product.url}
        alt={product.name}
        className="md:w-full md:h-40 w-20 h-20 object-cover rounded-md shadow hover:shadow-lg transition"
      />
      <h3 className="text-lg font-bold mt-3">{product.name}</h3>
      <p className="text-gray-600 h-10">{product.description}</p>
      <p className="text-xl font-bold text-orange-600 mt-2">{product.price}€</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-orange-600 text-white w-full py-2 rounded-lg hover:bg-orange-700"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
