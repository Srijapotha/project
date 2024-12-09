"use client";

import { useState } from "react";

export default function NewsletterSection() {
   const [email, setEmail] = useState("");

   return (
      <section className="py-12">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
               <div className="h-full w-full overflow-hidden bg-slate-200 rounded-3xl">
                  {/* <img
                     src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5"
                     alt="Interior"
                     className="rounded-lg w-max h-auto object-cover"
                  /> */}
               </div>
               <div className="flex-1 bg-pink-50 p-8 rounded-3xl h-max w-full">
                  <h2 className="text-2xl font-semibold mb-2 font-serif">
                     S'inscrire & économiser{" "}
                     <span className="text-blue-500">10%</span>
                  </h2>
                  <p className="text-gray-600 mb-6">
                     Yet busy any meeting sharp light marginalized 4-blocker
                     message. Productive corporate nail caught synergy
                     highlights lunch. Company another pushback items desk or
                     any.
                  </p>
                  <div className="flex gap-4">
                     <input
                        type="email"
                        placeholder="john@doe.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-md"
                     />
                     <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                        S'INSCRIRE
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
