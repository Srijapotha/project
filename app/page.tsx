import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import ProductDetails from "@/components/sections/ProductDetails";
import SimilarProducts from "@/components/sections/SimilarProducts";
import RecommendedProducts from "@/components/sections/RecommendedProducts";
import ServicesSection from "@/components/sections/ServicesSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/layout/Footer";
import { BsDot } from "react-icons/bs";
export default function Home() {
   return (
      <div className="min-h-screen flex flex-col">
         <Header />
         <Navigation />

         <main className="flex-1">
            <div className="container mx-auto px-4 py-6">
               <div className="text-sm text-gray-600  flex items-center gap-2">
                  <span>Home</span>
                  <BsDot className="text-gray-400" />
                  <span>Art de la table</span>
               </div>
            </div>

            <ProductDetails />
            <SimilarProducts />
            <RecommendedProducts />
            <ServicesSection />
            <NewsletterSection />
         </main>

         <Footer />
      </div>
   );
}
