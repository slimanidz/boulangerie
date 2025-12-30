// "use client";

// import { useEffect, useRef } from "react";

// export default function TarteSliderInfinite() {
//   const scrollerRef = useRef(null);

//   useEffect(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     let animationId;
//     const speed = 0.7; // augmente si tu veux plus rapide

//     const animate = () => {
//       scroller.scrollLeft += speed;

//       // reset invisible pour effet infini
//       if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
//         scroller.scrollLeft = 0;
//       }

//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   const tartes = [
//     { id: 1, name: "Tarte aux pommes", image: "/tarte-pomme.jpg" },
//     { id: 2, name: "Tarte citron", image: "/tarte-citron.jpg" },
//     { id: 3, name: "Tarte fraise", image: "/tarte-fraise.jpg" },
//     { id: 4, name: "Tarte chocolat", image: "/tarte-chocolat.jpg" },
//     { id: 5, name: "Tarte fruits rouges", image: "/tarte-fruits.jpg" },
//   ];

//   return (
//     <section className="w-full overflow-hidden py-16 bg-white">
//       {/* SCROLLER (c’est LUI qui scroll) */}
//       <div ref={scrollerRef} className="overflow-x-scroll flex no-scrollbar">
//         {/* CONTENT large */}
//         <div className="flex gap-6 w-max px-6">
//           {[...tartes, ...tartes].map((tarte, index) => (
//             <div
//               key={index}
//               className="min-w-[320px] h-[420px] relative rounded-2xl overflow-hidden"
//             >
//               <img
//                 src={tarte.image}
//                 alt={tarte.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/25" />
//               <div className="absolute bottom-6 left-6 text-white">
//                 <h3 className="text-xl font-bold">{tarte.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import Modal from "./Model";
import { useAppContext } from "./AppContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TarteSlider() {
  const { openModel, setopenmodel } = useAppContext();
  const [activeTab, setActiveTab] = useState("ingredients");
  const [tarteSelected, setTarteSlected] = useState([]);
  const router = useRouter();

  const tartes = [
    {
      id: 1,
      name: "Tarte pommes",
      description: "Deguste notre tarte au pomme crustiente et delecieuse",
      image: "/tarte-pomme.jpg",
    },
    { id: 2, name: "Tarte citron", image: "/tarte-citron.jpg" },
    { id: 3, name: "Tarte fraise", image: "/tarte-fraise.jpg" },
    { id: 4, name: "Tarte chocolat", image: "/tarte-chocolat.jpg" },
    { id: 5, name: "Tarte fruits rouges", image: "/tarte-fruits.jpg" },
  ];

  const hendleSelect = (e) => {
    const idSelect = Number(e.currentTarget.getAttribute("data-id")) - 1;
    setTarteSlected(tartes[idSelect]);
    setopenmodel(true);
  };

  const handleFermModal = () => {
    setopenmodel(false);
  };

  const handleCommande = () => {
    setopenmodel(false);
    router.push("/");
  };

  return (
    <section className="w-full overflow-hidden py-16 bg-white">
      <div className="relative w-full">
        {/* TRACK */}
        <div className="flex w-max animate-marquee gap-6   ">
          {[...tartes, ...tartes].map((tarte, index) => (
            <div
              key={index}
              data-id={tarte.id}
              className=" min-w-80 h-80 rounded-2xl overflow-hidden relative hover:scale-110  duration-200 z-100  "
              onClick={hendleSelect}
            >
              {/**/}
              <img
                src="/tarte-fruits.jpg" // juste une tarte pour faire beau apres changer avec le map
                alt={tarte.name}
                className="w-80 h-80 object-contain" //contain cover
              />
              <div className="absolute inset-0 bg-blac/20" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl text-black font-bold">{tarte.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openModel ? (
        <Modal
          open={openModel}
          className="bg-red-6 flex justify-center items-center  "
        >
          <div className="bg-gray-300 h-[400px] w-[200px] md:h-[600px] md:w-[400px]  rounded-xl p-2 flex flex-col justify-between">
            <div>
              <div className="flex justify-end">
                <button onClick={handleFermModal}>X</button>
              </div>
              <h1 className="font-bold text-xl">{tarteSelected.name}</h1>
              <h1 className="">{tarteSelected.description}</h1>
              <section className="">
                {/* TITRES */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("ingredients")}
                    className={`flex-1 py-3 text-center font-semibold transition
            ${
              activeTab === "ingredients"
                ? "border-b-2 border-yellow-500 text-yellow-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
                  >
                    Ingrédients
                  </button>

                  <button
                    onClick={() => setActiveTab("allergenes")}
                    className={`flex-1 py-3 text-center font-semibold transition
            ${
              activeTab === "allergenes"
                ? "border-b-2 border-yellow-500 text-yellow-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
                  >
                    Allergènes
                  </button>
                </div>

                {/* CONTENU */}
                <div className="mt-6 bg-white rounded-xl shadow p-6">
                  {activeTab === "ingredients" && (
                    <div>
                      <h3 className="font-bold text-lg mb-2">Ingrédients</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Farine de blé</li>
                        <li>Beurre</li>
                        <li>Sucre</li>
                        <li>Œufs</li>
                        <li>Levure</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === "allergenes" && (
                    <div>
                      <h3 className="font-bold text-lg mb-2">Allergènes</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Gluten</li>
                        <li>Lait</li>
                        <li>Œufs</li>
                        <li>Fruits à coque</li>
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </div>
            <button
              // href="/"
              onClick={handleCommande}
              className="w-full text-center text-white bg-blue-700 hover:bg-blue-600 rounded-xl  mb-5 p-1 "
            >
              Commender
            </button>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
