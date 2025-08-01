// Definim tipurile de proiecte pentru portofoliu
const projectSections = [
  {
    id: "fotovoltaic",
    title: "Sisteme Fotovoltaice",
    description: "Proiecte de instalare panouri fotovoltaice pentru reducerea costurilor cu energia",
    projects: [
      {
        title: "Casă Rezidențială 6kW",
        description: "Sistem fotovoltaic complet pentru gospodărie, economii de 80% la factura de curent",
        details: "40 panouri, invertor hibrid, sistem de monitorizare"
      },
      {
        title: "Fermă Solară 50kW",
        description: "Instalație comercială pentru producția de energie verde",
        details: "200 panouri, 3 invertoare, sistem de management energetic"
      },
      {
        title: "Complex Residential 20kW",
        description: "Sistem fotovoltaic pentru bloc de apartamente",
        details: "85 panouri, baterii de stocare, contor inteligent"
      }
    ]
  },
  {
    id: "smart-home",
    title: "Case Inteligente",
    description: "Soluții complete pentru automatizarea și controlul inteligent al locuinței",
    projects: [
      {
        title: "Vila Smart Completă",
        description: "Automatizare totală: iluminat, climatizare, securitate și audio-video",
        details: "Control prin aplicație, senzori de mișcare, camere de supraveghere"
      },
      {
        title: "Apartament Smart",
        description: "Sistem de control inteligent pentru apartament cu 3 camere",
        details: "Termostat inteligent, prize smart, control vocal"
      },
      {
        title: "Iluminat Inteligent Birou",
        description: "Sistem de iluminat adaptativ pentru spațiu de lucru",
        details: "Senzori de lumină, programare automată, economie energetică"
      }
    ]
  },
  {
    id: "instalatii-electrice",
    title: "Instalații Electrice",
    description: "Proiecte de instalații electrice rezidențiale și industriale",
    projects: [
      {
        title: "Casă Nouă 150mp",
        description: "Instalație electrică completă pentru casă unifamilială",
        details: "Tablou electric, prize, întrerupătoare, iluminat exterior"
      },
      {
        title: "Renovare Electrică Apartament",
        description: "Modernizare instalație electrică existentă",
        details: "Înlocuire cabluri, tablou nou, prize USB integrate"
      },
      {
        title: "Hală Industrială 1000mp",
        description: "Instalație electrică pentru spațiu industrial",
        details: "Iluminat LED industrial, tablouri de distribuție, prize industriale"
      }
    ]
  }
];

const PortofoliuPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-yellow-400">Portofoliu</h1>
      <p className="mt-4 text-lg text-center text-gray-300 max-w-3xl mx-auto">
        Descoperiți proiectele noastre realizate cu succes în domeniile fotovoltaic, smart home și instalații electrice.
      </p>

      <div className="mt-12 space-y-16">
        {projectSections.map((section) => (
          <section key={section.id} className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-400 text-center">{section.title}</h2>
            <p className="mt-4 text-gray-300 text-center max-w-2xl mx-auto">{section.description}</p>
            
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.projects.map((project, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg hover:shadow-yellow-400/20 transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-yellow-400">{project.title}</h3>
                  <p className="mt-3 text-gray-300">{project.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <p className="text-sm text-gray-400 font-medium">Detalii tehnice:</p>
                    <p className="text-sm text-gray-300 mt-1">{project.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Sectiunea Call to Action */}
      <section className="text-center py-16 mt-16 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-white">Aveți un proiect în minte?</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Contactați-ne pentru o consultație gratuită și să discutăm despre cum vă putem ajuta să vă realizați proiectul.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Discutați cu noi
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortofoliuPage;
