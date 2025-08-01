// Definim o listă de servicii pentru a o putea mapa usor
const services = [
  {
    title: "Instalații Electrice Rezidențiale",
    description: "Proiectare și execuție de instalații electrice sigure și eficiente pentru locuința dumneavoastră, respectând toate normele în vigoare.",
  },
  {
    title: "Soluții Smart Home",
    description: "Transformați-vă casa într-una inteligentă. Oferim soluții complete pentru controlul iluminatului, climatizării, securității și a altor sisteme direct de pe telefon.",
  },
  {
    title: "Instalare Panouri Fotovoltaice",
    description: "Investiți în energie verde și reduceți costurile la factură. Asigurăm montaj profesionist pentru sisteme de panouri fotovoltaice.",
  },
  {
    title: "Instalații Electrice Industriale",
    description: "Soluții robuste și scalabile pentru hale industriale, birouri și spații comerciale, de la proiectare la mentenanță.",
  },
  {
    title: "Mentenanță și Reparații",
    description: "Servicii prompte de mentenanță preventivă și corectivă pentru a asigura funcționarea optimă și sigură a instalațiilor electrice.",
  },
  {
    title: "Consultanță și Proiectare",
    description: "Oferim consultanță specializată pentru a alege cele mai bune soluții electrice și energetice, adaptate nevoilor și bugetului dumneavoastră.",
  },
];

const ServiciiPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-yellow-400">Serviciile Noastre</h1>
      <p className="mt-4 text-lg text-center text-gray-300">
        Oferim o gamă completă de soluții electrice și energetice pentru proiecte rezidențiale și industriale.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-400/20 transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-yellow-400">{service.title}</h2>
            <p className="mt-4 text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciiPage;
