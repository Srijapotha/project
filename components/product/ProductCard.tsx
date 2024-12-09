import { Heart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  pieces: number;
  imageSrc: string;
}

export default function ProductCard({ title, price, pieces, imageSrc }: ProductCardProps) {
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
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md">
          <Heart size={20} />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-lg font-semibold">{price}€</p>
          <p className="text-sm text-gray-500">{pieces} pièces</p>
        </div>
      </div>
    </div>
  );
}