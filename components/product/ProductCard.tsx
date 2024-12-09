import { Heart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
   title: string;
   price: number;
   pieces: number;
   imageSrc: string;
}

export default function ProductCard({
   title,
   price,
   pieces,
   imageSrc,
}: ProductCardProps) {
   return (
      <div className="group relative">
         <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
               src={imageSrc}
               alt={title}
               width={500}
               height={500}
               className="h-full w-full object-cover object-center"
            />
            <button className="absolute top-4 left-4 p-2 rounded-full text-white">
               <Heart size={30} />
            </button>
         </div>
         <div className="mt-4">
            <div className="flex text-xl font-serif  text-gray-700 justify-between">
               <h3>{title}</h3>
               <span>0€</span>
            </div>
            <div className="flex justify-between items-center mt-1">
               <p className="text-sm text-gray-500">
                  0,35€/Pièce · RÉF : VABGN5
               </p>
            </div>
         </div>
      </div>
   );
}
