"use client";
import { useState } from "react";
import { useAppContext } from "./AppContext";
import Link from "next/link";
import { PiSignOutBold } from "react-icons/pi";
import { SlUser } from "react-icons/sl";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const {
    state: { session },
  } = useAppContext();
  const { setSession } = useAppContext();

  //pour afficher juste la premiere lettre du nom dans le petit rond:
  const word = session?.username;
  const firstLetter = word?.charAt(0);

  const handelSignOut = () => {
    setSession();
  };

  return (
    <div
      className="relative inline-block pt-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="w-12 h-12 flex items-center justify-center rounded-full
                border border-gray-200
                shadow-md bg-gray-100"
      >
        {session ? (
          <span className="text-3xl font-bold text-gray-800">
            {firstLetter}
          </span>
        ) : (
          <span className="text-3xl font-bold text-gray-800 ">
            <SlUser />
          </span>
        )}
      </button>

      {/* Menu */}
      <div
        className={`
          absolute right-0 top-full w-56 rounded-xl bg-white shadow-xl
          transition-all duration-200
          ${
            open
              ? "opacity-100 visible translate-y-0 z-50"
              : "opacity-0 invisible -translate-y-2"
          }
        `}
      >
        <div>
          {session ? (
            <div className="p-5">
              <h1 className="text-black text-3xl font-bold first-letter:uppercase">
                {session?.username}
              </h1>
              <p className="text-blac text-sm text-gray-500">
                {session?.email}
              </p>
              <div className="flex justify-center">
                <Link
                  href="/users"
                  className="w-full text-center text-blac text-sm text-black border p-1 rounded hover:bg-gray-200 cursor-pointer"
                >
                  Manage compte
                </Link>
              </div>
            </div>
          ) : null}

          <ul className="py-2">
            <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-black">
              Pains
            </li>
            <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-black">
              Viennoiseries
            </li>
            <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-black">
              Pâtisseries
            </li>
          </ul>
        </div>
        <div className="text-black w-full flex px-2">
          {session ? (
            <button
              onClick={handelSignOut}
              className="border-t border-black  w-full px-3 py-3 flex items-center gap-3 hover:text-amber-400 cursor-pointer "
            >
              <PiSignOutBold />
              Sign-Out
            </button>
          ) : (
            <Link
              className="border-t border-black  w-full px-3 py-3 flex items-center gap-3 hover:text-amber-400 cursor-pointer "
              href="/sign-in"
            >
              <PiSignOutBold />
              Sign-in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
