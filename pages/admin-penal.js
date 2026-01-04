// import { useState } from "react";
// import UploadImage from "../components/UploadImage";

// export default function AdminPenal() {
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     image: "",
//   });
//   console.log(form);

//   return (
//     <div>
//       <h1>Admin - Ajouter produit</h1>

//       <input
//         type="text"
//         placeholder="Nom du produit"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />

//       <input
//         type="number"
//         placeholder="Prix"
//         value={form.price}
//         onChange={(e) => setForm({ ...form, price: e.target.value })}
//       />

//       <UploadImage onUpload={(url) => setForm({ ...form, image: url })} />

//       {form.image && (
//         <img src={form.image} alt="preview" className="w-32 mt-4" />
//       )}
//     </div>
//   );
// }

import { useCallback, useState } from "react";
import UploadImage from "../components/UploadImage";
import { useAppContext } from "@/components/AppContext";
import api from "@/services/api";

export default function AdminPenal() {
  const { setDonnes } = useAppContext();
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const data = new FormData(e.target);
      const {
        data: { result },
      } = await api.post("/api/produits", {
        name: data.get("name"),
        price: data.get("price"),
        description: data.get("description"),
        url: form.image,
      });
      console.log(result);
      if (result) {
        alert("produit added");
        // restform();
        // router.push("/sign-in");

        return;
      }
    },

    [form.image]
  );

  return (
    <div>
      <h1>Admin - Ajouter produit</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom du produit"
          className="border"
        />

        <input
          type="number"
          name="price"
          placeholder="Prix"
          className="border"
        />
        <input
          type="textarea"
          name="description"
          placeholder="description"
          className="border"
        />

        <UploadImage
          onUpload={(url) => setForm((prev) => ({ ...prev, image: url }))}
        />

        <button type="submit" disabled={!form.image}>
          Enregistrer le produit
        </button>
      </form>

      {form.image && (
        <img src={form.image} alt="preview" className="w-32 mt-4" />
      )}
    </div>
  );
}
