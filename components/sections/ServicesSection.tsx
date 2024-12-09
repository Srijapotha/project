export default function ServicesSection() {
   const services = [
      {
         icon: "/trolly.png",
         title: "Livraison & Reprise",
         description: "Selon vos besoins",
      },
      {
         icon: "/dish.png",
         title: "Nettoyage",
         description: "Selon vos besoins",
      },
      {
         icon: "/monitor.png",
         title: "Commande Illimitée",
         description: "Tout est possible",
      },
      {
         icon: "/van.png",
         title: "Transport & Enlèvement",
         description: "On s'occupe de tout",
      },
   ];

   return (
      <section className="py-12 bg-gradient-to-b from-pink-50 to-transparent">
         <div className="container mx-auto px-4 md:flex-row flex-col gap-3 md:justify-between justify-start">
            <h2 className="text-center text-3xl font-serif mb-2">
               On s'occupe de <span className="text-blue-500">tout</span>
            </h2>
            <p className="text-center text-gray-500 mb-8">
               Office ipsum you must be muted. It meeting consistently busy
               john.
            </p>
            <div className="flex gap-14 flex-wrap justify-center">
               {services.map((service) => (
                  <div key={service.title} className="text-center">
                     <div className="inline-flex items-center justify-center mb-4">
                        <img
                           src={service.icon}
                           alt=""
                           className="w-12 aspect-square"
                        />
                     </div>
                     <h3 className="font-normal mb-2 text-xl font-serif text-gray-700">
                        {service.title}
                     </h3>
                     <p className="text-gray-400">{service.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
