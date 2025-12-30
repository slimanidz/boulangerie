// import Link from "next/link";
// import ProductCard from "../components/ProductCard";
// import Page from "@/components/Page";
// import api from "@/services/api";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAppContext } from "@/components/AppContext";

// export default function Home({ addToCart }) {
//   const [users, setUsers] = useState([]);
// const { produits } = useAppContext();

//   useEffect(() => {
//     (async () => {
//       const {
//         data: { result },
//       } = await api.get("/api/users");
//       setUsers(result);
//     })();
//   }, []);

//   return (
//     <Page>
//       <section className="text-center mt-10">
//         <h2 className="text-4xl font-bold text-orange-600">
//           Bienvenue chez Délice de Léna
//         </h2>
//         <Link href="/produits">Produits</Link>
//         <Link href="/admin">admin</Link>
//         <Link href="/admin-penal">admin-penal</Link>
//         <p className="text-gray-700 mt-3">
//           Votre boulangerie artisanale, fraîche et faite maison.
//         </p>
//         <p>pain, viennoiseries , pâtisseries, salés, sables, tartes</p>
//       </section>

//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mt-10">
//         {produits.map((p) => (
//           <ProductCard key={p.name} product={p} addToCart={addToCart} />
//         ))}
//       </section>
//     </Page>
//   );
// }
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import { useAppContext } from "@/components/AppContext";
import TarteSlider from "@/components/TarteSlider";
import { useEffect, useState } from "react";
import Modal from "@/components/Model";
import Selection from "@/components/Selection";
import Page from "@/components/Page";
import Header from "@/components/Header";

export default function Home() {
  const { produits } = useAppContext();
  const [openModel, setopenmodel] = useState(true);

  console.log(produits);

  return (
    // <Page>
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero */}
      {/* <section className="relative bg-[url('/banner-bakery.jpg')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Bienvenue chez Délice de Léna
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white max-w-xl">
            Artisan boulanger depuis 1998 — Saveurs authentiques et pains faits
            maison.
          </p>
          <a
            href="#products"
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Voir nos produits
          </a>
        </div>
      </section> */}

      <section className="relative h-screen bg-[url('/banner-bakery.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <Header className="z-50" />

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 300 }}
          transition={{ duration: 2 }}
          className="relative  z-10  flex flex-col justify-center items-center text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold">Délice de Léna</h1>
          <p className="mt-4 text-xl max-w-xl">
            Boulangerie artisanale — savoir-faire & passion
          </p>
        </motion.div>
      </section>
      {/*  menu deroulant des tarte  */}

      <TarteSlider />

      {/*  Produits Vedettes   */}
      <section id="products" className="py-16 px-6">
        <h2 className="text-3xl sm:text-[50px] md:text-[100px] leading-none tracking-tight font-bol text-center my-20">
          Nos produits phares
        </h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/banner-bakery.jpg"
              alt="banner-bakery"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">viennoiseries</h3>
              <p className="mt-2 text-gray-600">
                baguette croustill Une baguette croustillante et dorée à
                souhait.
              </p>

              <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition">
                visite
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/croissant.jpg"
              alt="Croissant Beurre"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Croissant Beurre</h3>
              <p className="mt-2 text-gray-600">
                Feuilleté pur beurre, léger comme un nuage.
              </p>
              <p className="mt-2 font-semibold text-yellow-600">1.20 €</p>
              <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition">
                Ajouter au panier
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/tarte.jpg"
              alt="Tarte aux pommes"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Tarte aux Pommes</h3>
              <p className="mt-2 text-gray-600">
                Tarte maison aux pommes fondantes.
              </p>
              <p className="mt-2 font-semibold text-yellow-600">3.50 €</p>
              <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div> */}
        <Selection />
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Nos produits</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produits.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.15}>
              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition">
                <img
                  src={p.url}
                  alt={p.name}
                  className="h-48 w-full object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-semibold text-yellow-600">
                      {p.price} €
                    </span>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl text-sm">
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* À propos */}
      <section className="bg-white py-20 px-6">
        <FadeIn y={60}>
          <h2 className="text-3xl font-bold text-center mb-6">À propos</h2>
          <p className="max-w-2xl mx-auto text-center text-gray-700">
            Chez Délice de Léna, nous mettons notre passion dans chaque fournée.
            Du pain croustillant aux viennoiseries fondantes, notre savoir-faire
            artisanal vous garantit une expérience gustative unique chaque jour.
          </p>
        </FadeIn>
      </section>

      {/* Contact rapide */}
      <section className="py-16 px-6 text-center bg-yellow-100">
        <h2 className="text-3xl font-bold mb-4">Nous contacter</h2>
        <p className="text-gray-700 mb-6">
          Besoin d’une commande spéciale ? Appelez-nous ou passez nous voir !
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="tel:+33123456789"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Appeler
          </a>
          <a
            href="/contact"
            className="bg-white border border-yellow-500 hover:bg-yellow-50 text-yellow-600 font-semibold px-6 py-3 rounded-lg transition"
          >
            Nous écrire
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="font-semibold">© 2025 Délice de Léna</p>
        <p className="text-sm text-gray-400">
          12 Rue du Pain Chaud, Paris – Ouvert 6h00 à 19h00
        </p>
      </footer>
    </div>
    // </Page>
  );
}
