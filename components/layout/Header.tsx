"use client";

import {
   Search,
   ShoppingCart,
   Heart,
   Lightbulb,
   ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
   const [language, setLanguage] = useState("FR");

   return (
      <header className="">
         <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
               <div className="flex items-center">
                  <Link href="/" className="flex items-start space-x-2">
                     <span className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
                        <Image
                           src="https://pbs.twimg.com/profile_images/1823657033851170816/DwUBAylS_400x400.png"
                           alt="WeFarmeTech Logo"
                           fill
                           className="object-contain"
                           sizes="(max-width: 768px) 150px, 180px"
                           priority
                        />
                     </span>
                  </Link>

                  <div className="hidden lg:flex flex-1 max-w-xl mx-8 w-full">
                     <div className="relative w-full">
                        <input
                           type="text"
                           placeholder="Rechercher un produit"
                           className=" w-96 px-4 py-2 rounded-md bg-gray-50"
                        />
                        <Search
                           className="absolute right-3 top-2.5 text-gray-400"
                           size={20}
                        />
                     </div>
                  </div>
               </div>

               <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                     <Lightbulb size={20} />
                     <span className="hidden md:inline">Inspirations</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 relative">
                     <Heart size={20} />
                     <span className="hidden md:inline">Mes favoris</span>
                     <span className=" bg-gray-100 text-xs font-medium px-2 py-0.5 rounded-full">
                        24
                     </span>
                  </button>
                  <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                     <ShoppingCart size={20} />
                     <span>Panier</span>
                  </button>
                  <div className="w-10 aspect-square rounded-full bg-gray-200"></div>
                  <button
                     onClick={() =>
                        setLanguage(language === "FR" ? "EN" : "FR")
                     }
                     className="flex items-center justify-center  text-gray-600 "
                  >
                     {language}
                     <ChevronDown size={20} />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
}
