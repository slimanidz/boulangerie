import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Page from "@/components/Page";
import { useAppContext } from "@/components/AppContext";

export default function Produits({ addToCart }) {
  const { produits } = useAppContext();

  return (
    <Page>
      <h2 className="text-3xl font-bold text-center mt-6">Nos Produits</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mt-10 mb-20">
        {produits.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </Page>
  );
}
