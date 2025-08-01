import Link from 'next/link';

// Pictograme SVG simple pentru secțiunea de caracteristici
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.955a11.955 11.955 0 0118-8.001c0-1.609-.38-3.14-1.05-4.544z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.707.707M12 21a5 5 0 01-7.072 0l.707-.707M12 5a3 3 0 013 3h-6a3 3 0 013-3z" />
  </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export default function Home() {
  return (
    <>
      {/* Sectiunea Hero */}
      <section className="text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-yellow-400 sm:text-5xl md:text-6xl max-w-3xl">
          B.H.T. SMART CONCEPT
        </h1>
        <p className="mt-4 text-lg text-gray-300 sm:text-xl md:text-2xl">
          Soluții complete pentru un viitor electric inteligent.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Cere o Ofertă
          </Link>
        </div>
      </section>

      {/* Sectiunea "De ce sa ne alegeti?" */}
      <section className="py-20 bg-gray-800 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">De ce să ne alegeți?</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <ShieldIcon />
              <h3 className="text-xl font-bold mt-4 text-yellow-400">Profesionalism</h3>
              <p className="mt-2 text-gray-300">Echipă de experți certificați, dedicați calității și respectării normelor în vigoare.</p>
            </div>
            <div className="flex flex-col items-center">
              <LightBulbIcon />
              <h3 className="text-xl font-bold mt-4 text-yellow-400">Inovație</h3>
              <p className="mt-2 text-gray-300">Implementăm cele mai noi tehnologii pentru soluții smart, eficiente și personalizate.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircleIcon />
              <h3 className="text-xl font-bold mt-4 text-yellow-400">Siguranță</h3>
              <p className="mt-2 text-gray-300">Prioritizăm siguranța instalațiilor și a clienților noștri în fiecare etapă a proiectului.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectiunea Call to Action Servicii */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">Explorați Serviciile Noastre</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          De la instalații electrice clasice la sisteme fotovoltaice și case inteligente, avem soluția potrivită pentru dumneavoastră.
        </p>
        <div className="mt-8">
          <Link
            href="/servicii"
            className="inline-block bg-gray-700 text-yellow-400 font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Vezi toate serviciile
          </Link>
        </div>
      </section>
    </>
  );
}
