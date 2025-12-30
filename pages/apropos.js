import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Apropos() {
  return (
    <>
      <Header />
      <div className="px-8 py-6">
        <h2 className="text-3xl font-bold mb-4">À propos de Délice de Léna</h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          Depuis 2020, Délice de Léna propose des produits faits maison,
          préparés chaque matin avec passion.
        </p>

        <p className="text-gray-700 mt-4 text-lg">
          Notre priorité est la qualité : farine locale, beurre AOP et recettes
          traditionnelles.
        </p>
      </div>
      <Footer />
    </>
  );
}
