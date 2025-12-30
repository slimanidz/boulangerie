import hashPassword from "@/services/hashPassword";
import Produit from "./db/models/Produit";

console.log("hello");
const produitsRoutes = async (req, res) => {
  // if (!auth(req, res)) {
  //   return
  // }

  if (req.method === "GET") {
    const produits = await Produit.query();

    if (!produits) {
      res.status(404).send({ error: "Erreur. Aucun résultat." });

      return;
    }
    const [{ count }] = await Produit.query().count();

    res.status(200).send({ result: produits, count });
  }

  if (req.method === "POST") {
    const {
      body: { name, price, description, url },
    } = req;
    const produit = await Produit.query()
      .insert({
        name,
        price,
        description,
        url,
      })
      .returning("*");
    if (name === null || price === "") {
      res.status(400).send({ error: "Erreur champs!!!!!!." });
      return;
    }
    res.status(200).send({ result: produit });
  }
};

export default produitsRoutes;
