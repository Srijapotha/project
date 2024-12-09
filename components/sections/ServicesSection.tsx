import { Truck, Sparkles, ShoppingCart, Package } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Livraison & Reprise",
      description: "Selon vos besoins",
    },
    {
      icon: Sparkles,
      title: "Nettoyage",
      description: "Selon vos besoins",
    },
    {
      icon: ShoppingCart,
      title: "Commande Illimitée",
      description: "Tout est possible",
    },
    {
      icon: Truck,
      title: "Transport & Enlèvement",
      description: "On s'occupe de tout",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-2">
          On s'occupe de <span className="text-blue-500">tout</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Office ipsum you must be muted. It meeting consistently busy john.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}