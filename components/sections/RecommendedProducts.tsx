import ProductCard from "@/components/product/ProductCard";

export default function RecommendedProducts() {
   const products = [
      {
         title: "Chaise pliante",
         price: 29.5,
         pieces: 20,
         imageSrc:
            "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
      },
      {
         title: "Nappe blanche 150x150",
         price: 15.5,
         pieces: 20,
         imageSrc:
            "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
      },
      {
         title: "Set de couverts",
         price: 12.5,
         pieces: 20,
         imageSrc:
            "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
      },
   ];

   return (
      <section className="py-12">
         <div className="container mx-auto px-4">
            <div className="flex justify-between md:flex-row flex-col items-center mb-8 gap-4">
               <h2 className="text-3xl font-serif text-gray-700 text-center">
                  Ces produits pourraient vous intéresser
               </h2>
               <button className="text-blue-600 hover:text-blue-700">
                  VOIR TOUTE LA COLLECTION
               </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
               ))}
            </div>
         </div>
      </section>
   );
}
