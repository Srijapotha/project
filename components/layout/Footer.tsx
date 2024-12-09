"use client";

import { Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
   const sections = {
      "INFOS PRATIQUES": [
         "À propos",
         "Livraisons & Reprises",
         "Mode d'emploi",
         "F.A.Q",
      ],
      LÉGAL: ["Mentions légales", "CGU", "CGV", "Politique de confidentialité"],
      "MON COMPTE": [
         "Accéder à mon compte",
         "Ma liste d'envie",
         "Créer un compte",
         "Mot de passe oublié",
      ],
   };

   return (
      <footer className="bg-white pt-12 border-t pb-96">
         <div className="container mx-auto px-4 flex justify-between">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
               <div>
                  <Link href="/" className="block">
                     <div className="relative w-[100px] h-[100px]">
                        <Image
                           src="https://pbs.twimg.com/profile_images/1823657033851170816/DwUBAylS_400x400.png"
                           alt="WeFarmeTech Logo"
                           fill
                           className="object-contain"
                           sizes="100px"
                           priority={false}
                        />
                     </div>
                  </Link>
               </div>
               {Object.entries(sections).map(([title, items]) => (
                  <div key={title}>
                     <h3 className="font-semibold mb-4">{title}</h3>
                     <ul className="space-y-2">
                        {items.map((item) => (
                           <li key={item}>
                              <Link
                                 href="#"
                                 className="text-gray-600 hover:text-gray-900"
                              >
                                 {item}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
            <div className="flex justify-end space-x-4">
               <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter size={20} />
               </Link>
               <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram size={20} />
               </Link>
               <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={20} />
               </Link>
            </div>
         </div>
      </footer>
   );
}
