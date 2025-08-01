// Iconuri SVG pentru secțiuni
const WorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
  </svg>
);

const GrowthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TeamWorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const BenefitsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Date pentru pozițiile disponibile
const jobPositions = [
  {
    title: "Electrician Autorizat",
    type: "Full-time",
    experience: "2+ ani experiență",
    location: "București și județul Ilfov",
    description: "Căutăm electricieni autorizați pentru instalații rezidențiale și comerciale. Experiența în sisteme smart home este un avantaj.",
    requirements: [
      "Autorizație electrician categoria I sau II",
      "Minim 2 ani experiență în instalații electrice",
      "Cunoștințe de bază AutoCAD (opțional)",
      "Permis de conducere categoria B",
      "Disponibilitate program flexibil"
    ],
    benefits: [
      "Salariu competitiv + bonusuri performance",
      "Cursuri de specializare plătite de companie",
      "Echipamente și unelte de lucru",
      "Asigurare medicală privată",
      "Zile libere suplimentare"
    ]
  },
  {
    title: "Tehnician Sisteme Fotovoltaice",
    type: "Full-time",
    experience: "1+ ani experiență",
    location: "București și județele limitrofe",
    description: "Specializat în instalarea și mentenanța sistemelor fotovoltaice. Oportunitate de a lucra cu tehnologii verzi de ultimă generație.",
    requirements: [
      "Studii tehnice (liceu/școală profesională)",
      "Experiență în instalații electrice",
      "Cunoștințe despre sisteme fotovoltaice (avantaj)",
      "Comfort cu lucrul la înălțime",
      "Spirit de echipă și responsabilitate"
    ],
    benefits: [
      "Formare specializată în tehnologii solare",
      "Proiecte variate și provocatoare",
      "Echipă tânără și dinamică",
      "Posibilități de avansare rapidă",
      "Participare la proiecte inovatoare"
    ]
  },
  {
    title: "Specialist Smart Home",
    type: "Full-time",
    experience: "1-3 ani experiență",
    location: "București",
    description: "Implementarea soluțiilor de automatizare și control inteligent pentru locuințe și birouri. Poziție ideală pentru pasionații de tehnologie.",
    requirements: [
      "Cunoștințe electronice și automatizări",
      "Experiență cu sisteme IoT și smart devices",
      "Abilități de programare (Python, C++ - avantaj)",
      "Engleză conversațională",
      "Orientare către client și soluții"
    ],
    benefits: [
      "Lucru cu tehnologii de vârf",
      "Formări continue în domeniul IoT",
      "Proiecte personalizate și creative",
      "Mediu de lucru modern",
      "Oportunități de dezvoltare"
    ]
  }
];

const CarieraPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6">
          Carieră la B.H.T. SMART CONCEPT
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Alătură-te echipei noastre de specialiști și contribuie la construirea viitorului energetic al României. 
          Oferim oportunități de creștere într-un mediu dinamic și inovator.
        </p>
      </section>

      {/* De ce să lucrezi cu noi */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 text-center mb-8 sm:mb-12">
          De Ce Să Lucrezi Cu Noi?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center hover:shadow-yellow-400/20 transition-shadow duration-300">
            <WorkIcon />
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-4 sm:mt-6 mb-3 sm:mb-4">Proiecte Diverse</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Lucrezi la proiecte variate - de la case inteligente la ferme solare, 
              fiecare zi aduce provocări noi și oportunități de învățare.
            </p>
          </div>

          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center hover:shadow-yellow-400/20 transition-shadow duration-300">
            <GrowthIcon />
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-4 sm:mt-6 mb-3 sm:mb-4">Dezvoltare Profesională</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Investim în echipa noastră prin cursuri de specializare, certificări 
              și participare la conferințe din domeniul tehnologiilor verzi.
            </p>
          </div>

          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center hover:shadow-yellow-400/20 transition-shadow duration-300">
            <TeamWorkIcon />
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-4 sm:mt-6 mb-3 sm:mb-4">Echipă Unită</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Lucrezi alături de profesioniști pasionați, într-un mediu colaborativ 
              unde fiecare idee contează și este valorificată.
            </p>
          </div>

          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center hover:shadow-yellow-400/20 transition-shadow duration-300">
            <BenefitsIcon />
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-4 sm:mt-6 mb-3 sm:mb-4">Beneficii Competitive</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Pachet salarial atractiv, asigurare medicală, zile libere suplimentare 
              și multe alte beneficii pentru bunăstarea echipei.
            </p>
          </div>
        </div>
      </section>

      {/* Pozițiile disponibile */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 text-center mb-8 sm:mb-12">
          Pozițiile Disponibile
        </h2>
        <div className="space-y-8">
          {jobPositions.map((job, index) => (
            <div key={index} className="bg-gray-800 p-6 sm:p-8 rounded-lg hover:shadow-yellow-400/20 transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="bg-gray-700 px-3 py-1 rounded-full">{job.type}</span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full">{job.experience}</span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full">📍 {job.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                {job.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4">Cerințe:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-yellow-400 mr-2 mt-1">•</span>
                        <span className="text-gray-300 text-sm sm:text-base">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4">Beneficii:</h4>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-yellow-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors text-sm sm:text-base"
                >
                  Aplică pentru această poziție
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nu găsești poziția potrivită */}
      <section className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 text-center mb-6 sm:mb-8">
          Nu Găsești Poziția Potrivită?
        </h2>
        <div className="text-center">
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
            Suntem mereu în căutarea de talente excepționale! Dacă ești pasionat de tehnologiile verzi, 
            instalații electrice sau inovație, trimite-ne CV-ul tău. Te vom contacta când va apărea o poziție potrivită.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-yellow-400 transition-colors text-sm sm:text-base"
            >
              Trimite CV-ul Spontan
            </a>
            <a
              href="mailto:hr@bht-concept.ro"
              className="inline-block bg-gray-700 text-yellow-400 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
            >
              📧 hr@bht-concept.ro
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="text-center py-12 sm:py-16 bg-gray-800 rounded-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
          Construiește-ți Viitorul Cu Noi
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          La B.H.T. SMART CONCEPT, fiecare membru al echipei contribuie la construirea unui viitor mai verde și mai inteligent. 
          Vino să faci parte din această misiune!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-yellow-400 transition-colors text-sm sm:text-base"
          >
            Aplică Acum
          </a>
          <a
            href="/despre"
            className="inline-block bg-gray-700 text-yellow-400 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            Află Mai Multe Despre Noi
          </a>
        </div>
      </section>
    </div>
  );
};

export default CarieraPage;