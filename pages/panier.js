import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Panier({ cart, setCart }) {
  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />

      <div className="px-8 py-6">
        <h2 className="text-3xl font-bold mb-4">Votre Panier</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Votre panier est vide.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow p-4 mb-4 rounded"
            >
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.price}€</p>
              </div>

              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Supprimer
              </button>
            </div>
          ))
        )}

        <div className="text-right font-bold text-2xl mt-6">
          Total : {total.toFixed(2)}€
        </div>
      </div>

      <Footer />
    </>
  );
}
