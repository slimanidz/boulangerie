"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // 🔒 Fermer le menu si clic en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="bg-amber text-white relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}

        {/* Bouton hamburger */}
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Menu */}
        <nav
          ref={menuRef}
          className={` absolute top-12 left-0 w-60 mx-3 rounded-xl text-black
             flex flex-col gap-4 px-6 py-6 bg-white
            transition-all duration-300
            md:static md:w-full md:flex md:flex-row md:gap-8 md:p-0 md:bg-inherit md:text-white

             ${open ? "block" : "hidden "} md:block
          `}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-amber-200"
          >
            Accueil
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-amber-200"
          >
            Nos pains
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-amber-200"
          >
            Viennoiseries
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-amber-200"
          >
            Pâtisseries
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-amber-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
