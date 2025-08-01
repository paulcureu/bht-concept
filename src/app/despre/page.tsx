// Iconuri SVG pentru secțiuni
const TeamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MissionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const VisionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ExperienceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DesprePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6">
          Despre B.H.T. SMART CONCEPT
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Suntem o companie românească dedicată inovației în domeniul soluțiilor electrice, 
          specializată în sisteme fotovoltaice, case inteligente și instalații electrice de înaltă calitate.
        </p>
      </section>

      {/* Povestea Noastră */}
      <section className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 text-center mb-6 sm:mb-8">Povestea Noastră</h2>
        <div className="prose prose-invert max-w-none prose-lg">
          <p className="text-gray-300 leading-relaxed mb-6">
            B.H.T. SMART CONCEPT s-a născut din pasiunea pentru tehnologie și din dorința de a contribui 
            la un viitor mai sustenabil și mai eficient din punct de vedere energetic. Fondată cu viziunea 
            de a democratiza accesul la tehnologiile verzi și inteligente, compania noastră a evoluat 
            constant pentru a răspunde nevoilor în continuă schimbare ale clienților.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            De la primele noastre instalații electrice rezidențiale până la complexele sisteme fotovoltaice 
            și soluțiile smart home de astăzi, am parcurs un drum plin de provocări și realizări. 
            Fiecare proiect finalizat ne-a întărit convingerea că tehnologia trebuie să servească omul 
            și să contribuie la protejarea mediului.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Astăzi, echipa noastră de specialiști certificați continuă să inoveze și să ofere soluții 
            personalizate care îmbină eficiența energetică cu confortul modern, contribuind la construirea 
            unui viitor mai verde pentru România.
          </p>
        </div>
      </section>

      {/* Valorile Noastre - Grid Section */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 text-center mb-8 sm:mb-12">Valorile Care Ne Definesc</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Experiența */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center hover:shadow-yellow-400/20 transition-shadow duration-300">
            <ExperienceIcon />
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-4 sm:mt-6 mb-3 sm:mb-4">Experiență</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Ani de experiență în domeniul instalațiilor electrice și al tehnologiilor verzi ne-au 
              oferit expertiza necesară pentru a rezolva cele mai complexe provocări.
            </p>
          </div>

          {/* Echipa */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center hover:shadow-yellow-400/20 transition-shadow duration-300">
            <TeamIcon />
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-4 sm:mt-6 mb-3 sm:mb-4">Echipa</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Echipa noastră de specialiști certificați combină cunoștințele tehnice cu pasiunea 
              pentru inovație, asigurând rezultate excepționale în fiecare proiect.
            </p>
          </div>

          {/* Misiunea */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center hover:shadow-yellow-400/20 transition-shadow duration-300">
            <MissionIcon />
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-4 sm:mt-6 mb-3 sm:mb-4">Misiunea</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Să oferim soluții electrice și energetice inovatoare care îmbunătățesc calitatea vieții 
              clienților noștri, contribuind în același timp la protejarea mediului.
            </p>
          </div>

          {/* Viziunea */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center hover:shadow-yellow-400/20 transition-shadow duration-300">
            <VisionIcon />
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-4 sm:mt-6 mb-3 sm:mb-4">Viziunea</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Să devenim liderul pieței românești în domeniul soluțiilor electrice inteligente și 
              sustenabile, setând noi standarde de calitate și inovație.
            </p>
          </div>
        </div>
      </section>

      {/* De Ce Ne Alegeți */}
      <section className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 text-center mb-6 sm:mb-8">De Ce Ne Alegeți Pe Noi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">🔧 Soluții Complete</h3>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              De la consultanță și proiectare până la instalare și mentenanță, oferim servicii complete 
              care acoperă toate aspectele proiectului dumneavoastră.
            </p>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">⚡ Tehnologie Avansată</h3>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Utilizăm doar echipamente de ultimă generație de la producători recunoscuți mondial, 
              asigurând performanțe superioare și durabilitate în timp.
            </p>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">🛡️ Garanție Extinsă</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Oferim garanții extinse pentru toate serviciile și echipamentele instalate, 
              dându-vă încrederea că investiția dumneavoastră este protejată.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">🌱 Sustenabilitate</h3>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Fiecare soluție pe care o implementăm are ca scop reducerea amprenta de carbon 
              și promovarea unui stil de viață mai sustenabil.
            </p>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">💡 Consultanță Personalizată</h3>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Analizăm în detaliu nevoile dumneavoastră specifice și propunem soluții personalizate 
              care se potrivesc perfect bugetului și cerințelor tehnice.
            </p>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">🏆 Rezultate Dovedite</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Portofoliul nostru de proiecte finalizate cu succes și feedback-ul pozitiv 
              al clienților demonstrează calitatea serviciilor noastre.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 sm:py-16 bg-gray-800 rounded-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">Să Construim Împreună Viitorul</h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          Indiferent dacă visați la o casă inteligentă, la independența energetică prin panouri fotovoltaice 
          sau la o instalație electrică modernă, suntem aici să vă transformăm visurile în realitate.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-yellow-400 transition-colors text-sm sm:text-base"
          >
            Contactați-ne Acum
          </a>
          <a
            href="/portofoliu"
            className="inline-block bg-gray-700 text-yellow-400 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            Vezi Proiectele Noastre
          </a>
        </div>
      </section>
    </div>
  );
};

export default DesprePage;
