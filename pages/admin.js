import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const addProduct = () => {
    setProducts([...products, form]);
    setForm({ name: "", description: "", price: "", image: "" });
  };

  return (
    <>
      <Header />

      <div className="px-8 py-6">
        <h2 className="text-3xl font-bold mb-6">Panel Admin</h2>

        <div className="grid gap-4 max-w-lg">
          <input
            placeholder="Nom du produit"
            className="border p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Description"
            className="border p-2 rounded"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <input
            placeholder="Prix"
            type="number"
            className="border p-2 rounded"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: parseFloat(e.target.value) })
            }
          />

          <input
            placeholder="URL de l’image"
            className="border p-2 rounded"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <button
            onClick={addProduct}
            className="bg-orange-600 text-white py-2 rounded"
          >
            Ajouter le produit
          </button>
        </div>

        <h3 className="text-xl font-bold mt-8">Produits ajoutés :</h3>
        {products.map((p, i) => (
          <div key={i} className="bg-white shadow p-4 mt-3 rounded">
            <p>
              <b>{p.name}</b> — {p.price}€
            </p>
            <p>{p.description}</p>
            <img src={p.image} className="w-32 mt-2" />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
