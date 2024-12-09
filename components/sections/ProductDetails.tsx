"use client";

import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";

export default function ProductDetails() {
   const [quantity, setQuantity] = useState(1);

   return (
      <section className="py-8">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
               {/* Product Images */}
               <div className="lg:w-1/2">
                  <div className="aspect-square relative mb-4">
                     <Image
                        src="https://images.unsplash.com/photo-1577140917170-285929fb55b7"
                        alt="Product"
                        fill
                        className="rounded-lg object-cover relative"
                     />
                     <div className="grid grid-rows-4 gap-4 absolute z-10 top-0 left-0">
                        {[...Array(4)].map((_, i) => (
                           <div key={i} className="aspect-square relative">
                              <Image
                                 src="https://images.unsplash.com/photo-1577140917170-285929fb55b7"
                                 alt={`Thumbnail ${i + 1}`}
                                 fill
                                 className="rounded-lg object-cover cursor-pointer"
                              />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Product Info */}
               <div className="lg:w-1/2 flex justify-between flex-col py-7">
                  <div>
                     <div className="flex justify-between items-start">
                        <div>
                           <h1 className="text-3xl mb-2 font-serif font-normal">
                              Cheese - appareil à raclette 1/2 roue
                           </h1>
                           <p className="text-2xl text-gray-700 font-normal">
                              39.50€
                           </p>
                        </div>
                        <button className="p-2 rounded-full hover:bg-gray-100">
                           <Heart size={24} />
                        </button>
                     </div>

                     <div className="mt-8">
                        <p className="text-gray-600">
                           Location machine à raclette - Raclette traditionnelle
                           1/2 roue
                           <br />
                           Régulateur de température
                           <br />
                           Appareil à raclette professionnel
                           <br />
                           Boîtier de chauffe horizontal réglable en hauteur
                        </p>
                        <p className="text-gray-600 mt-2">
                           220V
                           <br />
                           900W
                        </p>
                     </div>
                  </div>
                  <div className="mt-8 mb-0 border-t pt-5">
                     <div className="flex items-center space-x-4 ">
                        <div className="flex items-center border rounded-md">
                           <button
                              className="p-2 hover:bg-gray-100"
                              onClick={() =>
                                 setQuantity(Math.max(1, quantity - 1))
                              }
                           >
                              <Minus size={20} />
                           </button>
                           <span className="px-4">{quantity}</span>
                           <button
                              className="p-2 hover:bg-gray-100"
                              onClick={() => setQuantity(quantity + 1)}
                           >
                              <Plus size={20} />
                           </button>
                        </div>
                        <button className="flex-1 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
                           Ajouter au panier
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2">
               <div>
                  <h2 className="font-serif text-gray-700 text-2xl mb-2">
                     Description produit
                  </h2>
                  <p className="text-gray-500">
                     Festi vous propose à la location un/une "Jewel - grand
                     couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
                     (HTVA). Que ce soit pour votre mariage, une fête
                     d'anniversaire ou du personnel, ce produit a fait l'objet
                     d'une sélection rigoureuse par notre équipe. Il est en
                     location chez nous sous la référence "VAJGC". Nous sommes à
                     votre disposition pour que les événements de nos clients,
                     même en last-minute, soient toujours une réussite. Vous
                     pourrez trouver tout une série d'autre produit à louer de
                     ce type dans la catégorie "Art de la Table".
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
