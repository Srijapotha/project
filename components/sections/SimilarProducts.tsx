import ProductCard from "@/components/product/ProductCard";

export default function SimilarProducts() {
  const products = [
    {
      title: "Table ronde 150cm",
      price: 39.50,
      pieces: 20,
      imageSrc: "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
    },
    {
      title: "Table carrée 120cm",
      price: 35.50,
      pieces: 20,
      imageSrc: "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
    },
    {
      title: "Table rectangulaire 180cm",
      price: 45.50,
      pieces: 20,
      imageSrc: "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
    },
    {
      title: "Table haute 110cm",
      price: 42.50,
      pieces: 20,
      imageSrc: "https://images.unsplash.com/photo-1577140917170-285929fb55b7",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Articles similaires</h2>
          <button className="text-blue-600 hover:text-blue-700">
            VOIR TOUTE LA COLLECTION
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}