import { useState } from "react";
import Link from "next/link";
import { VscSignOut } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { useAppContext } from "./AppContext";
import Modal from "./Model";
import DropdownMenu from "./DropdownMenu";
import { SlUser } from "react-icons/sl";
import Navbar from "./Navbar";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const {
    state: { session },
  } = useAppContext();
  const { setSession } = useAppContext();

  //pour afficher juste la premiere lettre du nom dans le petit rond:
  const word = session?.username;
  const firstLetter = word?.charAt(0);
  /////

  return (
    <header className="bg-orange-6 z-50 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* <nav className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white text-orange-600 px-2 md:px-4 py-2 rounded-lg font-semibold"
        >
          |||
        </button>

        {open && (
          <div className="absolute left-0 mt-2 w-40 bg-white text-gray-700 rounded-lg shadow-lg overflow-hidden">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Accueil
            </Link>
            <Link
              href="/produits"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Produits
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        )}
      </nav> */}

      {/* ////////////////// */}
      <Navbar />
      <DropdownMenu />

      {/* ///////////////// */}
    </header>
  );
}
