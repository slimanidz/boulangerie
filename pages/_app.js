import { useEffect, useState } from "react";
import "../styles/globals.css";
import AppContextProvider from "@/components/AppContext";

export default function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const c = localStorage.getItem("cart");
    if (c) setCart(JSON.parse(c));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <AppContextProvider>
      {" "}
      <Component {...pageProps} cart={cart} addToCart={addToCart} />;
    </AppContextProvider>
  );
}
