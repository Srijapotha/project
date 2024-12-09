"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navigation() {
   const [activeCategory, setActiveCategory] = useState("");

   const categories = [
      "ART DE LA TABLE",
      "MOBILIER",
      "NAPPAGE",
      "MATÉRIEL DE SALLE",
      "CUISINE",
      "BARBECUE",
      "TENTE",
      "CHAUFFAGE",
      "PODIUM - PISTE DE DANSE",
      "SON ET LUMIÈRE",
      "PACKS",
      "CONSOMMABLES",
   ];

   return (
      <nav className="border-b">
         <div className="container mx-auto">
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
               <ul className="flex justify-between py-4">
                  {categories.map((category) => (
                     <li key={category}>
                        <button
                           className={`text-sm hover:text-blue-600 transition-colors ${
                              activeCategory === category ? "text-blue-600" : ""
                           }`}
                           onClick={() => setActiveCategory(category)}
                        >
                           {category}
                        </button>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
               <button className="flex items-center justify-between w-full py-4 px-4">
                  <span className="text-sm font-medium">Categories</span>
                  <ChevronDown size={20} />
               </button>
            </div>
         </div>
      </nav>
   );
}
