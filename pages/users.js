"use client";

import { useAppContext } from "@/components/AppContext";
import Link from "next/link";

export default function UsersPage() {
  const {
    state: { session },
  } = useAppContext();
  const { setSession } = useAppContext();

  //pour afficher juste la premiere lettre du nom dans le petit rond:
  const word = session?.username;
  const firstLetter = word?.charAt(0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Compte</h1>

      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shadow mb-4">
        <span className="text-4xl font-bold text-gray-700">{firstLetter}</span>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition my-3">
        <spam className="font-bold text-xl">Username:</spam> {session?.username}
      </div>
      <div className=" bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition my-3">
        <spam className="font-bold text-xl">Email :</spam> {session?.email}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition my-3">
        <spam className="font-bold text-xl">Telephone : </spam>
        {session?.talephone}
      </div>
      <div className="flex justify-around mt-10">
        <Link href="/modifier-donnes">Modifier</Link>
        <Link href="/change-mot-passe">Changer mot de passe</Link>
      </div>
    </div>
  );
}
